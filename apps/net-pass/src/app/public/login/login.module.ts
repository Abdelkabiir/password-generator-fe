import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class LoginModule {

}