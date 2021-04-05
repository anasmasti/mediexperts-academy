import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation.model';
import { map } from 'rxjs/operators';
import { Theme } from '../models/theme.model';
import { Domaine } from '../models/domaine.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  //get formations from server
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${environment.API_URL}formations`);
  }

  //get formations from server
  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${environment.API_URL}themes`);
  }

  //get formations from server
  getDomaines(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(`${environment.API_URL}domaines`);
  }
  //get single formation from server
  getSingleFormation(id: any): Observable<Formation[]> {
    return this.http.get<Formation[]>(`${environment.API_URL}formations/${id}`);
  }
}
