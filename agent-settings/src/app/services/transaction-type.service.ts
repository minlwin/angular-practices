import { Injectable } from '@angular/core';
import mappings from '../../assets/transaction-by-agent.json'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  constructor() { }

  findByAgent(agent:string):Observable<string[]> {
    return of(mappings[agent])
  }
}
