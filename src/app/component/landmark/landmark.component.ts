import { Component } from '@angular/core';
import jsonData from '../../../assets/landmark.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ShowComponent } from "../show/show.component";
import { ServiceService } from '../../service.service';

@Component({
    selector: 'app-landmark',
    standalone: true,
    templateUrl: './landmark.component.html',
    styleUrl: './landmark.component.scss',
    imports: [FormsModule, CommonModule, RouterLink, RouterOutlet, MatButtonModule, ShowComponent]
})
export class LandmarkComponent {
  selectedCountry: string = '';
  landmarks = jsonData;
  landmark : any = {};

  uni =["ญี่ปุ่น", "ประเทศไทย", "เนเธอร์แลนด์"];

  constructor(private Router: Router, private service: ServiceService){
    console.log(this.service.SearchType);

    if(sessionStorage.getItem('idShow')){

      if(this.service.SearchType == 'Number'){
        this.landmark = this.landmarks.filter((landmark) => landmark.idx ==+ sessionStorage.getItem('idShow')!)
      } else if (this.service.SearchType == 'Name'){
        this.landmark = this.landmarks.filter((lm) => lm.name.includes(''));
      } else if (this.service.SearchType == 'Country'){
        this.landmark = this.landmarks.filter((lm) => lm.country.includes(sessionStorage.getItem('Country')!))
      }

    } else {

      this.landmark = [this.landmarks[0]];

    }

  }

  PageShow(id: any){

    sessionStorage.setItem('idShow', id);
    this.Router.navigate(['show']);

  }

  Number(id: HTMLInputElement) {
    this.landmark = this.landmarks.filter(lm => lm.idx.toString() === id.value);

    if(this.landmark.length > 0){
      sessionStorage.setItem('idSearch', id.value)
    }

    if (this.landmark.length === 0 && this.landmarks.length > 0) {

      if(sessionStorage.getItem('idSearch')){
        this.landmark = this.landmarks.filter((landmark) => landmark.idx ==+ sessionStorage.getItem('idSearch')!);
      } else {
        this.landmark = [this.landmarks[0]]
      }

    }

    this.service.SearchType = 'Number';
  }

  namePush(nameCountry: HTMLInputElement) {

    this.landmark = this.landmarks.filter((lm) => lm.name.includes(nameCountry.value));
    this.service.SearchType = 'Name'

  }

  CountrySelect(countryElement: HTMLSelectElement) {

    sessionStorage.setItem('Country', countryElement.value)
    this.landmark = this.landmarks.filter((lm) => lm.country.includes(countryElement.value));
    this.service.SearchType = 'Country'

  }
}
