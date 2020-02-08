import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignModule } from '../core/modules/material-design/material-design.module';
import { ComponentsModule } from '../core/components/components.module';
import { OptionCardComponent } from '../core/components/option-card/option-card.component';
import { ApiModule } from '../core/api/api.module';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
        ApiModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})

export class MainModule {

}