import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingV2Module } from './app-routing-v2.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingV2Module,
    FlexLayoutModule,
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppV2Module {}
