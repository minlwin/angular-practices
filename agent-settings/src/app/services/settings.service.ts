import { Injectable } from '@angular/core';
import settings from '../../assets/limit-settings.json'
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getAll():Observable<any[]> {
    return of(settings)
  }

  findByType(type:string):Observable<any> {
    return this.getAll().pipe(
      map(array => array.filter(info => info.type.type == type).pop())
    )
  }
}
