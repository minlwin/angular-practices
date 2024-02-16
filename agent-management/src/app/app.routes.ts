import { Routes } from '@angular/router';
import { AgentManagementComponent } from './pages/agent-management/agent-management.component';
import { HomeComponent } from './pages/home/home.component';
import { PhoneChangeRequestComponent } from './pages/phone-change-request/phone-change-request.component';
import { MappingChangeRequestComponent } from './pages/mapping-change-request/mapping-change-request.component';
import { StatusChangeRequestComponent } from './pages/status-change-request/status-change-request.component';
import { LimitPlanChangeRequestComponent } from './pages/limit-plan-change-request/limit-plan-change-request.component';
import { FeesPlanChangeRequestComponent } from './pages/fees-plan-change-request/fees-plan-change-request.component';
import { AgentEditComponent } from './pages/agent-management/agent-edit/agent-edit.component';
import { AgentDetailsComponent } from './pages/agent-management/agent-details/agent-details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'agents', children: [
    {path: 'list', component: AgentManagementComponent},
    {path: 'edit', component: AgentEditComponent},
    {path: 'details', component: AgentDetailsComponent},
    {path: '', redirectTo: '/agents/list', pathMatch: 'full'},
  ]},
  {path: 'requests', children: [
    {path: 'phone', component: PhoneChangeRequestComponent},
    {path: 'mapping', component: MappingChangeRequestComponent},
    {path: 'fees', component: FeesPlanChangeRequestComponent},
    {path: 'limit', component: LimitPlanChangeRequestComponent},
    {path: 'status', component: StatusChangeRequestComponent}
  ]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
