import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LimitSettingsComponent } from './pages/limit-settings/limit-settings.component';
import { FeesSettingsComponent } from './pages/fees-settings/fees-settings.component';
import { LimitEditComponent } from './pages/limit-settings/limit-edit/limit-edit.component';
import { LimitDetailsComponent } from './pages/limit-settings/limit-details/limit-details.component';
import { FeesEditComponent } from './pages/fees-settings/fees-edit/fees-edit.component';
import { FeesDetailsComponent } from './pages/fees-settings/fees-details/fees-details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'limits', children: [
    {path : 'list', component: LimitSettingsComponent},
    {path : 'edit', component: LimitEditComponent},
    {path : 'details', component: LimitDetailsComponent},
    {path : '', redirectTo: '/limits/list', pathMatch: 'full'}
  ]},
  {path: 'fees', children: [
    {path: 'list', component: FeesSettingsComponent},
    {path : 'edit', component: FeesEditComponent},
    {path : 'details', component: FeesDetailsComponent},
    {path: '', redirectTo: "/fees/list", pathMatch: 'full'}
  ]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
