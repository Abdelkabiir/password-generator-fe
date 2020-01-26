import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule, 
    MatFormFieldModule} from '@angular/material';

const modules: any[] = [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class MaterialDesignModule {}