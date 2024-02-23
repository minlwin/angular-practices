import { Component, Input, effect, input, signal } from '@angular/core';
import { WidgetsModule } from '../../../../widgets/widgets.module';
import { TransactionTypeService } from '../../../../services/transaction.type.service';

@Component({
  selector: 'app-limit-plan',
  standalone: true,
  imports: [WidgetsModule],
  templateUrl: './limit-plan.component.html',
  styles: ``
})
export class LimitPlanComponent {

  transactionTypes:string[] = []

  @Input()
  set agentType(value:string) {
    if(value) {
      let searchParam = "Agent"
      switch(value) {
        case "SA":
        case "BSA":
          searchParam = "Super Agent"
          break;
        case "CSE":
        case "BSE":
          searchParam = "Sale Executive"
          break;
        default:
          searchParam = "Agent"
          break;
        }
        this.service.findByAgentType(searchParam).subscribe(result => {
          this.transactionTypes = result
        })
    }
  }

  constructor(private service:TransactionTypeService) {
  }

}
