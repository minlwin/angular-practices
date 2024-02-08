import { Component } from '@angular/core';

@Component({
  selector: 'app-mapping-edit',
  templateUrl: './mapping-edit.component.html',
  styles: [
  ]
})
export class MappingEditComponent {

  type:string = 'P2P Transfer'

  changeType(value:string) {
    this.type = value
  }
}
