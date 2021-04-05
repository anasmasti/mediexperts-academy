import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from 'src/app/models/formation.model';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { getFormationsAction } from '../state/formation.actions';
import { getFormation, getFormationByTheme } from '../state/formation.selector';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit, OnChanges {

  formations: Formation[] = []
  loading: boolean = false
  @Input() theme_id = 0

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getFormationsAction())

    this.store.select(getLoading).subscribe(data => {
      this.loading = data
    })
    this.store.select(getFormation).subscribe(data => {
      this.formations = data
    })
  }

  ngOnChanges(): void {
    this.store.select(getFormationByTheme, {
      theme_id: this.theme_id
    })
      .subscribe(data => {
        this.formations = data
      })
  }
}
