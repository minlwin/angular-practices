import { Routes } from '@angular/router';
import { BalanceControlEditComponent } from './balance-control-edit/balance-control-edit.component';
import { BalanceControlHistoryComponent } from './balance-control-history/balance-control-history.component';

export const routes: Routes = [
  {path: 'edit', component: BalanceControlEditComponent},
  {path: 'history', component: BalanceControlHistoryComponent},
  {path: '', redirectTo: '/edit', pathMatch: 'full'}
];
