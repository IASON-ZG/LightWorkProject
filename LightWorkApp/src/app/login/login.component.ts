import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};
  user: User;
  username: string = "";
  failed: boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private userService: UserService
  ) {this.user = new User('','') ;
    this.username = localStorage.getItem('username') || "";
    this.failed = false;
  }

  getUsername(){
    console.log("my username is  :" + this.username)
    return this.username;
  }


  login(){
    console.log('user info is : ' + this.user.username + ' password : ' + this.user.password)
    this.userService.confirmUser(this.user).subscribe(result => {if (result == true){
      localStorage.setItem('username',this.user.username);
      this.username = this.user.username;
      this.gotoRunList();
    }else{
      this.failed = true;
      console.log("failed " + this.failed)
    }});
  }
  gotoRunList(){
    localStorage.setItem('username',this.user.username)
    this.username
    // console.log('local storage is : ' + localStorage.getItem('username'))
    this.router.navigate(['/runs'])
  }

  logout(){
    localStorage.clear();
    location.reload();
  }

  ngOnchanges(){
    
  }

  // ngOnInit() {
  //     sessionStorage.setItem('token', '');
  // }

  // login() {
  //     let url = 'http://localhost:8085/login';
  //     let result = this.http.post<Observable<boolean>>(url, {
  //         userName: this.model.username,
  //         password: this.model.password
  //       }).subscribe(isValid => {
  //         if (isValid) {
  //           sessionStorage.setItem(
  //             'token', 
  //             btoa(this.model.username)
  //           );
  //     this.router.navigate(['']);
  //       } else {
  //           alert("Authentication failed.")
  //       }
  //   });
  // }
}
