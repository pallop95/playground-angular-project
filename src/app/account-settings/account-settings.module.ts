import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSettingsComponent } from './account-settings.component';
import { AccountSettingsRoutingModule } from './account-settings-routing.module';



@NgModule({
  declarations: [
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    AccountSettingsRoutingModule
  ]
})
export class AccountSettingsModule { }
