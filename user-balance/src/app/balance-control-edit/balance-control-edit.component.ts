import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-balance-control-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './balance-control-edit.component.html',
  styleUrl: './balance-control-edit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BalanceControlEditComponent {

  list:any[] = [""]

  addNew() {
    this.list.push("")
  }

 }
