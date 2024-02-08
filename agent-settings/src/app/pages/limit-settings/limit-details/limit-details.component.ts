import { Component } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TransactionTypeService } from '../../../services/transaction-type.service';
import { CardComponent } from '../../../widgets/card/card.component';
import { AgentListComponent } from '../../../widgets/agent-list/agent-list.component';
import { AgentAddComponent } from '../../../widgets/agent-add/agent-add.component';

@Component({
  selector: 'app-limit-details',
  standalone: true,
  imports: [CardComponent, AgentListComponent, AgentAddComponent, RouterLink],
  templateUrl: './limit-details.component.html',
  styles: ``
})
export class LimitDetailsComponent {

  settingInfo:any
  transactionTypes:string[] = []
  shortCode = "A"

  constructor(setting:SettingsService, transactions:TransactionTypeService, route:ActivatedRoute) {
    route.queryParamMap.subscribe(map => {
      const type = map.get('type')
      if(type) {
        setting.findByType(type).subscribe(result => {
          this.settingInfo = result
          this.shortCode = result.type.code
        })
        transactions.findByAgent(type).subscribe(result => this.transactionTypes = result)
      }
    })
  }

}
