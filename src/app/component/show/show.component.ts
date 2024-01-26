import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import jsonData from '../../../assets/landmark.json';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, MatButtonModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent implements OnInit {
  id: any = '';
  jsonData = jsonData;
  landmark: any = {};

  constructor(
    private activeatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    if (sessionStorage.getItem('idShow')) {
      this.id = sessionStorage.getItem('idShow');
      this.landmark = this.jsonData.find((landmark) => landmark.idx == this.id);
    } else {
      this.router.navigate(['']);
    }
  }

  back(){
    window.history.back()
  }
}
