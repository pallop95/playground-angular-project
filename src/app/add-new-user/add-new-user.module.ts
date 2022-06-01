import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddNewUserComponent } from './add-new-user.component';

import { FormsModule } from "@angular/forms";

import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";

import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  { path: '', component: AddNewUserComponent }
];

@NgModule({
  declarations: [
    AddNewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FormsModule,
    FlexLayoutModule,

    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule
  ]
})
export class AddNewUserModule { }
