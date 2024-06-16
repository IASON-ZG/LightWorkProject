import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Run } from './run';
import { User } from './user';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = "http://localhost:8085";
  }

  public confirmUser(user: User){
    // return this.http.get<Run[]>(this.runsUrl,username);
    let params = new HttpParams();
    params = params.append("user", user.username);
    params = params.append("password",user.password);
    console.log('params are : ' + params)
    return this.http.get(this.usersUrl + "/login",{ params: params })
  }

  public save(user: User){
    return this.http.post<User>(this.usersUrl + "/register",user)
  }
}
