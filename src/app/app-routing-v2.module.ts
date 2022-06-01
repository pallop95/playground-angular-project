import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './users/users.module';
import { AccountSettingsModule } from './account-settings/account-settings.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule ) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'account-settings', loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsModule) },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { showHeader: false, showSidebar: false }
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule),
    data: { showHeader: false, showSidebar: false }
  },
  { path: 'test-flex-layout', loadChildren: () => import('./test-flex-layout/test-flex-layout.module').then(m => m.TestFlexLayoutModule) },
  { path: 'add-new-user', loadChildren: () => import('./add-new-user/add-new-user.module').then(m => m.AddNewUserModule) }
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingV2Module { }
