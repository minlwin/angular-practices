import { Injectable } from "@angular/core";
import SubSystems from "../../assets/dataset/sub-systems.json"
import { Observable, of } from "rxjs";
import { SubSystem } from "../pages/main-page/sub-system";

@Injectable({providedIn: 'root'})
export class SubSystemService {

  findAll():Observable<readonly SubSystem[]> {
    return of(SubSystems)
  }
}
