import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ConsumerComponent } from './pages/sub-system/consumer/consumer.component';
import { AgentComponent } from './pages/sub-system/agent/agent.component';
import { LedgerComponent } from './pages/sub-system/ledger/ledger.component';
import { WebUserComponent } from './pages/sub-system/web-user/web-user.component';
import { ConsumerAccountsComponent } from './pages/sub-system/consumer/consumer-accounts/consumer-accounts.component';
import { AgentAccountsComponent } from './pages/sub-system/agent/agent-accounts/agent-accounts.component';
import { LedgerListComponent } from './pages/sub-system/ledger/ledger-list/ledger-list.component';
import { UserListComponent } from './pages/sub-system/web-user/user-list/user-list.component';

export const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'consumer', component: ConsumerComponent, children: [
    {path: 'accounts', component: ConsumerAccountsComponent},
    {path: '', redirectTo: '/consumer/accounts', pathMatch: 'full'}
  ]},
  {path: 'agent', component: AgentComponent, children: [
    {path: 'accounts', component: AgentAccountsComponent},
    {path: '', redirectTo: '/agent/accounts', pathMatch: 'full'}
  ]},
  {path: 'ledger', component: LedgerComponent, children: [
    {path: 'list', component: LedgerListComponent},
    {path: '', redirectTo: '/ledger/list', pathMatch: 'full'}
  ]},
  {path: 'users', component: WebUserComponent, children: [
    {path: 'list', component: UserListComponent},
    {path: '', redirectTo: '/users/list', pathMatch: 'full'}
  ]},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];
