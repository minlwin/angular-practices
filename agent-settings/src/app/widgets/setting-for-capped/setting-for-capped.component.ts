import { Component } from '@angular/core';
import { AmountAndPercentComponent } from '../amount-and-percent/amount-and-percent.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-setting-for-capped',
  standalone: true,
  imports: [AmountAndPercentComponent, CardComponent],
  templateUrl: './setting-for-capped.component.html',
  styles: ``
})
export class SettingForCappedComponent {

}
