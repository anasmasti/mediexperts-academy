import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataTransform } from 'src/app/models/data_transform.model';
import { AppState } from 'src/app/store/app.state';
import { getLoading } from 'src/app/store/shared/shared.selector';
import { getSingleFormationAction } from '../state/formation.actions';
import {  getSingelFormation } from '../state/formation.selector';

@Component({
  selector: 'app-show-formation',
  templateUrl: './show-formation.component.html',
  styleUrls: ['./show-formation.component.css']
})
export class ShowFormationComponent implements OnInit {

  @ViewChild('targetTag')
  targetTag!: ElementRef;

  single_formation: any = {}
  loading: boolean = false
  dataTransform : DataTransform [] = [
    {symbol: '##', tag: 'h5', classes: 'txt_bold mt-5', addition: ''}, // section title
    {symbol: '&&', tag: 'h6', classes: 'mb-1 txt_bold', addition: ''}, // subtitle bold
    {symbol: '@@', tag: 'ul', classes: 'd-flex flex-row flex-wrap list-unstyled ', addition: ''}, // ul list container
    {symbol: '__', tag: 'li', classes: 'font-weight-light pl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12', addition: '<strong>+ </strong>'}, // li list element
    {symbol: '**', tag: 'strong', classes: '', addition: ''}, // text bold
    {symbol: '^^', tag: 'p', classes: 'font-s5', addition: ''}, // italic
    {symbol: '//', tag: 'em', classes: 'font-s5', addition: ''}, // italic
    {symbol: '~~', tag: 'u', classes: '', addition: ''}, // underline
    {symbol: '||', tag: 'mark', classes: 'bg-dark text_light', addition: ''},
    {symbol: '""', tag: 'q', classes: '', addition: ''},
  ]


  constructor(private actRoute: ActivatedRoute, private store: Store<AppState>, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
    this.store.select(getLoading).subscribe(data => {
      this.loading = data
     })
    const url_formation_id = this.actRoute.snapshot.paramMap.get('id');
    this.store.dispatch(getSingleFormationAction({formation_id: url_formation_id}))
    this.store.select(getSingelFormation).subscribe((data) => {
      this.single_formation = data
      this.ConvertDataTextToView(this.single_formation?.programme,'targetTag')
    })
  }


  TransformContent(textToTransform: string, symbol: string, tag: string, classes: string, addition: string) {
    return textToTransform ? textToTransform.split(symbol).map(function(value, index) {
      if (index % 2 == 0) {
        return value;
      } else {
        return `<${tag} class="${classes}">${addition}${value}</${tag}>`;
      }
    }).join("") : null;
  }
  ConvertStringToHtml(textToConvert: any, domId: any) {
    let domGoal = <HTMLElement>this.document.getElementById(domId)
    let newDom = document.createElement('article');
    newDom.innerHTML = textToConvert ? textToConvert : "--";
    domGoal.innerHTML = ""; // clean old paragraph
    domGoal.append(newDom); // append new paragraph
  }
  ConvertDataTextToView(originText: any, domId: any) {
    let myText = originText;
    // remplacer les symboles du paragraph de formation par des tags HTML
    this.dataTransform.map((trans) => {
      let converted = this.TransformContent(myText, trans.symbol, trans.tag, trans.classes, trans.addition);
      myText = converted;
    });
    // convert transformed text to HTML
    return this.ConvertStringToHtml(myText, domId);
  }

}
