import { Injectable } from '@angular/core';
import settings from '../../assets/fees-settings.json'
import { Observable, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeesSettingService {

  constructor() { }

  findAll():Observable<any[]> {
    return of(settings)
  }

  findById(id:string):Observable<any> {
    return this.findAll().pipe(
      map(array => array.filter(a => a.id == id).pop())
    )
  }
}
