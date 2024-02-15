import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WalletLimitComponent } from './limit/wallet-limit/wallet-limit.component';
import { WalletLimitEditComponent } from './limit/wallet-limit-edit/wallet-limit-edit.component';
import { WalletLimitDetailsComponent } from './limit/wallet-limit-details/wallet-limit-details.component';
import { FeesSettingComponent } from './fees/fees-setting/fees-setting.component';
import { FeesSettingEditComponent } from './fees/fees-setting-edit/fees-setting-edit.component';
import { FeesSettingDetailsComponent } from './fees/fees-setting-details/fees-setting-details.component';
import { LimitComponent } from './limit/limit.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "limit", component: LimitComponent ,children: [
    {path: "list", component: WalletLimitComponent},
    {path: "edit", component: WalletLimitEditComponent},
    {path: "details", component: WalletLimitDetailsComponent},
    {path: "", redirectTo: '/limit/list', pathMatch: 'full'}
  ]},
  {path: "fees", children: [
    {path: "list", component: FeesSettingComponent},
    {path: "edit", component: FeesSettingEditComponent},
    {path: "details", component: FeesSettingDetailsComponent},
    {path: "", redirectTo: '/fees/list', pathMatch: 'full'}
  ]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
