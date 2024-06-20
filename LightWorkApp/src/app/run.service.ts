import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Run } from './run';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private runsUrl: string;

  constructor(private http: HttpClient) { 
    this.runsUrl = "http://localhost:8085/api/runs";
  }

  public findAll(username: string): Observable<Run[]> {
    let params = new HttpParams();
    params = params.append('username',username);
    return this.http.get<Run[]>(this.runsUrl, {params : params})
  }

  public save(run: Run){
    return this.http.post<Run>(this.runsUrl,run)
  }

  public delete(id : string,username : string): Observable<boolean>{
    let params = new HttpParams();
    params = params.append('username',username)
    return this.http.delete<boolean>(this.runsUrl +'/'+ id, {params : params})
  }

}
