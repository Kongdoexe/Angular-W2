import { Component } from '@angular/core';
import jsonData from '../../../assets/landmark.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ShowComponent } from "../show/show.component";

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

  constructor(){
    this.landmark = [this.landmarks[0]];
  }

  Number(id: HTMLInputElement) {
    this.landmark = this.landmarks.filter(lm => lm.idx.toString() === id.value);

    if (this.landmark.length === 0 && this.landmarks.length > 0) {
      this.landmark = [this.landmarks[0]];
    }
  }

  namePush(nameCountry: HTMLInputElement) {
    this.landmark = this.landmarks.filter(lm => lm.name.includes(nameCountry.value));
  }

  CountrySelect(countryElement: HTMLSelectElement) {
    const select = countryElement.value;
    this.landmark = this.landmarks.filter(lm => lm.country.includes(select));
  }
}
