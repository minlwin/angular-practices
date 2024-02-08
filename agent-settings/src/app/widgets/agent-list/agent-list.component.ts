import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [],
  templateUrl: './agent-list.component.html',
  styles: ``
})
export class AgentListComponent {

  agents = [
    {name: "Thidar", shop: "196 Store"},
    {name: "Nilar", shop: "Goldern Arrow"},
    {name: "Aung Aung", shop: "Minglar Store"},
  ]

  @Input()
  agentCode = ""

  getCode(index:number) {
    let codeNumber = `${index + 1}`
    codeNumber = codeNumber.padStart(8, '0')
    return `${this.agentCode}-${codeNumber}`
  }
}
