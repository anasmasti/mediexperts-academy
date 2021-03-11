import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/models/domaine.model';
import { Theme } from 'src/app/models/theme.model';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { getDomainesAction } from '../state/formation.actions';
import { getDomaine, getTheme, getThemeByDomaine } from '../state/formation.selector';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.css']
})
export class DomaineComponent implements OnInit {

  domaines$: Observable<Domaine[]> = this.store.select(getDomaine);
  @Output() domaine_idEvent = new EventEmitter<any>()
  loading: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getDomainesAction())
    this.store.select(getLoading).subscribe(data => {
      this.loading = data
     })
  }

  getDomaineId(id: any){
   this.domaine_idEvent.emit(id)
  }

}
