import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Login } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogedGuard } from './guards/loged.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: Login, canActivate: [ LogedGuard ] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: 'dashboard/deviceList', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'dashboard/mycurrencies', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'dashboard/countryList', component: DashboardComponent, canActivate: [ AuthGuard ]},
  { path: 'dashboard/usersList', component: DashboardComponent, canActivate: [ RoleGuard ], data: { expectedRole: 'Admin' }},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
