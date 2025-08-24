import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { text } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url="http://localhost:8080/login";
  constructor(private http:HttpClient) { }
  loginService(userId:string,password:string):Observable<any>{
    return this.http.post(this.url,{userId,password},{
     responseType:'text' 
    })
  }
}
