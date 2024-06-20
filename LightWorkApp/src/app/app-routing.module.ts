import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunListComponent } from './run-list/run-list.component';
import { RunFormComponent } from './run-form/run-form.component';
import { BenchFormComponent } from './bench-form/bench-form.component';
import { BenchListComponent } from './bench-list/bench-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'runs', component: RunListComponent },
    { path: 'addrun', component: RunFormComponent },
    {path: 'benches', component: BenchListComponent},
    { path: 'addbench', component: BenchFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
