import { Router, RouterModule, Routes } from '@angular/router';
import { LandmarkComponent } from './component/landmark/landmark.component';
import { ShowComponent } from './component/show/show.component';

export const routes: Routes = [
  {path: '',component: LandmarkComponent},
  {path: 'show',component: ShowComponent}
];
