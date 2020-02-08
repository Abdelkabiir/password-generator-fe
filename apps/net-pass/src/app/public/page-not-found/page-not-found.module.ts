import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule
    ],
    providers: []
})

export class PageNotFoundModule {

}