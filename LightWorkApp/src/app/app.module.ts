import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RunFormComponent } from './run-form/run-form.component';
import { RunListComponent } from './run-list/run-list.component';
import { RunService } from './run.service';
import { BenchListComponent } from './bench-list/bench-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RunListComponent,
    RunFormComponent,
    BenchListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RunService],
  bootstrap: [AppComponent]
})
export class AppModule { }