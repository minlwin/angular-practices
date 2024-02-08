import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-amount-and-percent',
  standalone: true,
  imports: [],
  templateUrl: './amount-and-percent.component.html',
  styles: ``
})
export class AmountAndPercentComponent {
  @Input()
  label = "Fees"

  @Input()
  showPercent = true
}
