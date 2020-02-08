import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './public/login/login.module';
import { AppRouting } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundModule } from './public/page-not-found/page-not-found.module';
import { UserApi } from './core/api/user.api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    AppRouting,
    FlexLayoutModule,
    BrowserAnimationsModule,
    PageNotFoundModule,
    HttpClientModule
  ],
  providers: [UserApi],
  bootstrap: [AppComponent]
})
export class AppModule {}
