import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    },
    {
        path: '**', redirectTo: 'page-not-found', pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouting {

}