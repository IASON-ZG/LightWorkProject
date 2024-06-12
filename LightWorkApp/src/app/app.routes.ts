import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunListComponent } from './run-list/run-list.component';
import { RunFormComponent } from './run-form/run-form.component';

export const routes: Routes = [];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

 export class AppRoutingModule{} 
