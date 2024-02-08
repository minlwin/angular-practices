import { Component } from '@angular/core';
import { AmountAndPercentComponent } from '../amount-and-percent/amount-and-percent.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-setting-for-tier',
  standalone: true,
  imports: [AmountAndPercentComponent, CardComponent],
  templateUrl: './setting-for-tier.component.html',
  styles: ``
})
export class SettingForTierComponent {

  settings = [1]

  addTier() {
    this.settings.push(this.settings.length + 1)
  }
}
