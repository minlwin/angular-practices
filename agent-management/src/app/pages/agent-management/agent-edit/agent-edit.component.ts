import { Component, signal } from '@angular/core';
import { WidgetsModule } from '../../../widgets/widgets.module';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { KycInformationComponent } from './kyc-information/kyc-information.component';
import { ShopInformationComponent } from './shop-information/shop-information.component';
import { FeesPlanComponent } from './fees-plan/fees-plan.component';
import { LimitPlanComponent } from './limit-plan/limit-plan.component';
import { OtherDocumentsComponent } from './other-documents/other-documents.component';
import { AddressComponent } from './address/address.component';
import { IdentityComponent } from './identity/identity.component';

@Component({
  selector: 'app-agent-edit',
  standalone: true,
  imports: [WidgetsModule, RouterLink, KycInformationComponent, IdentityComponent, AddressComponent, ShopInformationComponent, FeesPlanComponent, LimitPlanComponent, OtherDocumentsComponent],
  templateUrl: './agent-edit.component.html',
  styles: ``
})
export class AgentEditComponent {

  title = "Create Agent"

  agentType = signal<string>("SA")

  constructor(route:ActivatedRoute) {
    route.queryParamMap.subscribe(map => {
      if(map.get("id")) {
        this.title = "Update Agent"
      }
    })
  }

  changeAgentType(type:string) {
    if(type) {
      this.agentType.set(type)
    }
  }
}
