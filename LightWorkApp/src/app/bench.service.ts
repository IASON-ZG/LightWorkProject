import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bench } from './bench';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BenchService {

  private benchesUrl: string;

  constructor(private http: HttpClient) { 
    this.benchesUrl = "http://localhost:8085/api/benches";
  }

  public findAll(): Observable<Bench[]> {
    return  this.http.get<Bench[]>(this.benchesUrl);
  }

  public save(bench: Bench){
    return this.http.post<Bench>(this.benchesUrl,bench)
  }

}
