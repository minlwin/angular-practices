import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CardComponent } from '../../../widgets/card/card.component';
import { FeesListComponent } from '../../../widgets/fees-list/fees-list.component';
import { AgentListComponent } from '../../../widgets/agent-list/agent-list.component';
import { AgentAddComponent } from '../../../widgets/agent-add/agent-add.component';
import { FeesSettingService } from '../../../services/fees-setting.service';
import { TransactionTypeService } from '../../../services/transaction-type.service';

@Component({
  selector: 'app-fees-details',
  standalone: true,
  imports: [RouterLink, CardComponent, FeesListComponent, AgentListComponent, AgentAddComponent],
  templateUrl: './fees-details.component.html',
  styles: ``
})
export class FeesDetailsComponent {

  setting:any = {}

  constructor(
    route:ActivatedRoute,
    service:FeesSettingService) {
    route.queryParamMap.subscribe(map => {
      const id = map.get("id")

      if(id) {
        service.findById(id).subscribe(result => this.setting = result)
      }
    })
  }
}
