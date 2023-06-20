import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
