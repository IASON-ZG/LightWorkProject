import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunListComponent } from './run-list/run-list.component';
import { RunFormComponent } from './run-form/run-form.component';
import { BenchListComponent } from './bench-list/bench-list.component';


const routes: Routes = [
    { path: 'runs', component: RunListComponent },
    { path: 'addrun', component: RunFormComponent },
    {path: 'benches', component: BenchListComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
