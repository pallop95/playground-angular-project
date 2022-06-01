import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestFlexLayoutComponent } from './test-flex-layout.component';


const routes: Routes = [
  { path: '', component: TestFlexLayoutComponent }
];

@NgModule({
  declarations: [
    TestFlexLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestFlexLayoutModule { }
