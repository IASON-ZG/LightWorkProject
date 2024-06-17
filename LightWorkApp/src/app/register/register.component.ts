import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model: any = {};
  user: User;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private userService: UserService
  ) { this.user = new User('','') }

  register(){
    this.userService.save(this.user).subscribe(result => this.gotoRunList());
  }

  gotoRunList(){
    localStorage.setItem('username',this.user.username)
    console.log('local storage is :' + localStorage.getItem('username'))
    this.router.navigate(['/runs'])
  }
}
