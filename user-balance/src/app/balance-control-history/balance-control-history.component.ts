import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-balance-control-history',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './balance-control-history.component.html',
  styleUrl: './balance-control-history.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceControlHistoryComponent {

  list:any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

}
