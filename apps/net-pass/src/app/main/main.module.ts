import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../core/modules/material-design/material-design.module';
import { ComponentsModule } from '../core/components/components.module';
import { ApiModule } from '../core/api/api.module';
import { CommonModule } from '@angular/common';  
import { AuthGuard } from '../core/_helpers/auth.guard';
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialDesignModule,
        ComponentsModule,
        ApiModule,
        CommonModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [HomeComponent],
    providers: []
})

export class MainModule {

}