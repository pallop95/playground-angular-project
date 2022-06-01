import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
