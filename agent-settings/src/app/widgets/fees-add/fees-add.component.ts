import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { TransactionTypeService } from '../../services/transaction-type.service';
import { ProviderMappingService } from '../../services/provider-mapping.service';
import { SettingForFixComponent } from '../setting-for-fix/setting-for-fix.component';
import { SettingForTierComponent } from '../setting-for-tier/setting-for-tier.component';
import { SettingForCappedComponent } from '../setting-for-capped/setting-for-capped.component';

@Component({
  selector: 'app-fees-add',
  standalone: true,
  imports: [CardComponent, SettingForFixComponent, SettingForTierComponent, SettingForCappedComponent],
  templateUrl: './fees-add.component.html',
  styles: ``
})
export class FeesAddComponent {

  trxTypes:string[] = []
  providers:string[] = []
  settingTypes = ["Fix", "Tier", "Capped"]

  showProviders = false
  selectedType = "Fix"

  constructor(trxTypeService:TransactionTypeService, private providerService:ProviderMappingService) {
    trxTypeService.findByAgent("Agent").subscribe(result => {
      this.trxTypes = result

      if(this.trxTypes.length > 0) {
        this.changeTransaction(this.trxTypes[0])
      }
    })
  }

  changeTransaction(trx:string) {
    this.providerService.findByTransaction(trx).subscribe(result => {
      this.providers = result
      this.showProviders = !(this.providers.length == 0 || this.providers[0] == 'NONE')
    })
  }

  changeSettingType(type:string) {
    this.selectedType = type
  }
}
