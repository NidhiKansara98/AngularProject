import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAuthGuard } from './login-auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
 
  {
    path: 'login',
    component: LoginComponent
    
  },
  { 
    path: 'dashboard', canLoad:[LoginAuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
