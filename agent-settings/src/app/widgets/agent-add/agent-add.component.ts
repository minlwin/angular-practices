import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-agent-add',
  standalone: true,
  imports: [CardComponent, NgClass],
  templateUrl: './agent-add.component.html',
  styles: ``
})
export class AgentAddComponent {

  list = [1]

  addAgent() {
    this.list.push(this.list.length + 1)
  }
}
