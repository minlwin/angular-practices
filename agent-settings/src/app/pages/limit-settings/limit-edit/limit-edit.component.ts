import { Component } from '@angular/core';
import { TransactionTypeService } from '../../../services/transaction-type.service';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../widgets/card/card.component';
import { AgentListComponent } from '../../../widgets/agent-list/agent-list.component';
import { AgentAddComponent } from '../../../widgets/agent-add/agent-add.component';

@Component({
  selector: 'app-limit-edit',
  standalone: true,
  imports: [RouterLink, CardComponent, AgentListComponent, AgentAddComponent ],
  templateUrl: './limit-edit.component.html',
  styles: ``
})
export class LimitEditComponent {

  shortCode = "SA"

  agenTypes = [
    {type : "Super Agent", name : "Super Agent (SA)", code : 'SA'},
    {type : "Super Agent", name : "Branch Super Agent (BSA)", code: 'BSA'},
    {type : "Sale Executive", name : "Channel Sale Executive (CSE)", code: 'CSE'},
    {type : "Sale Executive", name : "Branch Sale Executive (BSE)", code: 'BSE'},
    {type : "Agent", name : "Agent (A)", code: 'A'},
    {type : "Agent", name : "Branch Agent (BA)", code : 'BA'}
  ]
  transactionTypes:string[] = []

  selectedAgent = "Super Agent"

  constructor(private service:TransactionTypeService) {
    this.changeAgentType(this.agenTypes[0].code)
  }

  changeAgentType(code:string) {
    this.shortCode = code
    this.selectedAgent = this.agenTypes.filter(a => a.code == code).map(a => a.type).pop() || 'Agent'
    this.service.findByAgent(this.selectedAgent).subscribe(result => this.transactionTypes = result)
  }
}
