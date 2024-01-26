import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type searchtype = '' | 'Number' | 'Name' | 'Country' | null

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  SearchType: searchtype = 'Number';
}
