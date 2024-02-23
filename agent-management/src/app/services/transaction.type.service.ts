import { Injectable } from "@angular/core";
import mapping from "../../assets/agent-transaction-types.json"
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class TransactionTypeService {

  findByAgentType(type:string) {
    return of(mapping[type])
  }
}
