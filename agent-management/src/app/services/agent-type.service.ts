import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import agentTypes from "../../assets/agent-types.json"

@Injectable({providedIn: 'root'})
export class AgentTypeService {

  findAll():Observable<any[]> {
    return of(agentTypes)
  }
}
