import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-formation',
  templateUrl: './all-formation.component.html',
  styleUrls: ['./all-formation.component.css']
})
export class AllFormationComponent implements OnInit {

  domaine_id = 0
  theme_id = 0

  constructor() { }

  ngOnInit(): void {
  }
  receiveDomaineId($event: any) {
    this.domaine_id = $event
  }
  receiveThemeId($event: any) {
    this.theme_id = $event
  }
}
