import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './components/login/login.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { OperationBarComponent } from './components/dashboard/operation-bar/operation-bar.component';
import { UserBarComponent } from './components/dashboard/user-bar/user-bar.component';
import { ActivityTableComponent } from './components/dashboard/activity-table/activity-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListcurrenciesTableComponent } from './components/dashboard/activity-table/list-currencies-table/list-currencies-table.component';
import { MycurrenciesComponent } from './components/dashboard/activity-table/my-currencies/my-currencies.component';
import { CountriesComponent } from './components/dashboard/activity-table/countries/countries.component';
import { UsersComponent } from './components/dashboard/activity-table/users/users.component';
import { ModalsComponent } from './components/dashboard/modals/modals.component';
import { RegisterCurrencyComponent } from './components/dashboard/modals/register-currency/register-currency.component';
import { AddCurrencyComponent } from './components/dashboard/modals/add-currency/add-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    DashboardComponent,
    OperationBarComponent,
    UserBarComponent,
    ListcurrenciesTableComponent,
    ActivityTableComponent,
    MycurrenciesComponent,
    CountriesComponent,
    UsersComponent,
    ModalsComponent,
    RegisterCurrencyComponent,
    AddCurrencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
