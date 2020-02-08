import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PasswordApi } from './password.api';
import { UserApi } from './user.api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PasswordApi,
    UserApi
  ]
})
export class ApiModule { }
