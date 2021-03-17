import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component , EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/models/theme.model';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { getThemesAction } from '../state/formation.actions';
import { getTheme, getThemeByDomaine } from '../state/formation.selector';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit, OnChanges {

  themes: Theme[] = []
  @Input() domaine_id = 0
  @Output() theme_idEvent = new EventEmitter<any>()
  loading: boolean = false
  isClicked: boolean = false

  constructor(private store: Store<AppState>,  @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.store.dispatch(getThemesAction())
    this.store.select(getLoading).subscribe(data => {
      this.loading = data
     })
    this.store.select(getTheme).subscribe((data: Theme[]) => {
      this.themes = data
    })
  }
  ngOnChanges(): void {
    this.store.select(getThemeByDomaine, {
      domaine_id: this.domaine_id
    })
    .subscribe(data => {
      this.themes = data
    })
  }
  getThemeId(id: any){

    this.theme_idEvent.emit(id)
   }
}
