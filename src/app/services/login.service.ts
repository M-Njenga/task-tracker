import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';
import { Observable } from 'rxjs';

const httpOtions={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8086/login'

  constructor(private http:HttpClient) { }

  login(user:User): Observable <User>
  {
  console.log("Channel: "+user);
  return this.http.post <User> (this.apiUrl,user,httpOtions)
  }
}

