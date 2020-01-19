import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})

export class MainModule {

}