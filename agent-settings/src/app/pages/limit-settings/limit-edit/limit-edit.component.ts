import { Component } from '@angular/core';
import { TransactionTypeService } from '../../../services/transaction-type.service';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../widgets/card/card.component';

@Component({
  selector: 'app-limit-edit',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: './limit-edit.component.html',
  styles: ``
})
export class LimitEditComponent {

  agenTypes = [
    {type : "Super Agent", name : "Super Agent (SA)"},
    {type : "Super Agent", name : "Branch Super Agent (BSA)"},
    {type : "Sale Executive", name : "Channel Sale Executive (CSE)"},
    {type : "Sale Executive", name : "Branch Sale Executive (BSE)"},
    {type : "Agent", name : "Agent (A)"},
    {type : "Agent", name : "Branch Agent (BA)"}
  ]
  transactionTypes:string[] = []

  selectedAgent = ""

  constructor(private service:TransactionTypeService) {
    this.changeAgentType(this.agenTypes[0].type)
  }

  changeAgentType(type:string) {
    this.selectedAgent = type
    this.service.findByAgent(type).subscribe(result => this.transactionTypes = result)
  }
}
