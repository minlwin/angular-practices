import { Component } from '@angular/core';
import { AmountAndPercentComponent } from '../amount-and-percent/amount-and-percent.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-setting-for-fix',
  standalone: true,
  imports: [AmountAndPercentComponent, CardComponent],
  templateUrl: './setting-for-fix.component.html',
  styles: ``
})
export class SettingForFixComponent {

}
