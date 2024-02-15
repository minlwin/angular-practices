import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalletLimitComponent } from './limit/wallet-limit/wallet-limit.component';
import { WalletLimitDetailsComponent } from './limit/wallet-limit-details/wallet-limit-details.component';
import { WalletLimitEditComponent } from './limit/wallet-limit-edit/wallet-limit-edit.component';
import { FeesSettingComponent } from './fees/fees-setting/fees-setting.component';
import { FeesSettingEditComponent } from './fees/fees-setting-edit/fees-setting-edit.component';
import { FeesSettingDetailsComponent } from './fees/fees-setting-details/fees-setting-details.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LimitComponent } from './limit/limit.component';

@NgModule({
  declarations: [
    AppComponent,
    WalletLimitComponent,
    WalletLimitDetailsComponent,
    WalletLimitEditComponent,
    FeesSettingComponent,
    FeesSettingEditComponent,
    FeesSettingDetailsComponent,
    LoginComponent,
    LimitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
