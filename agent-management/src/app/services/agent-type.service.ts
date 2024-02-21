import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class AgentTypeService {

  findAll():Observable<any[]> {
    return of([
      {
        code : 'BSA',
        name : 'Branch Super Agent',
      },
      {
        code : 'SA',
        name : 'Super Agent',
      },
      {
        code : 'BSE',
        name : 'Branch Sale Executive',
      },
      {
        code : 'CSE',
        name : 'Channel Sale Executive',
      },
      {
        code : 'BA',
        name : 'Branch Agent',
      },
      {
        code : 'A',
        name : 'Agent',
      }
    ])
  }
}
