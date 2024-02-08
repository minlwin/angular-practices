import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MappingListComponent } from './mapping-list/mapping-list.component';
import { MappingEditComponent } from './mapping-edit/mapping-edit.component';
import { TransactionSettingComponent } from './mapping-edit/transaction-setting/transaction-setting.component';
import { MappingSettingComponent } from './mapping-edit/mapping-setting/mapping-setting.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MappingListComponent,
    MappingEditComponent,
    TransactionSettingComponent,
    MappingSettingComponent,
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
