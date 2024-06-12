import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Run } from './run';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private runsUrl: string;

  constructor(private http: HttpClient) { 
    this.runsUrl = "http://localhost:8085/api/runs";
  }

  public findAll(): Observable<Run[]> {
    return  this.http.get<Run[]>(this.runsUrl);
  }

  public save(run: Run){
    return this.http.post<Run>(this.runsUrl,run)
  }

}
