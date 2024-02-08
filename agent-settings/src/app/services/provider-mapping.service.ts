import { Injectable } from '@angular/core';
import mappings from '../../assets/provider.mapping.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderMappingService {

  constructor() { }

  findByTransaction(trx:string):Observable<string[]> {
    return of(mappings[trx])
  }
}
