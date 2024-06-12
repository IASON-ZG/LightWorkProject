import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunListComponent } from './run-list/run-list.component';
import { RunFormComponent } from './run-form/run-form.component';


const routes: Routes = [
    { path: 'runs', component: RunListComponent },
    { path: 'addrun', component: RunFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
