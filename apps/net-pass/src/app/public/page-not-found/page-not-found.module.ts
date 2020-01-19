import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';

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
        RouterModule.forChild(routes)
    ],
    providers: []
})

export class PageNotFoundModule {

}