import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
type forDataType =  {
    userId:string,
    name:string,
    email:string,
    countryCode:string,
    mobileNumber:string,
    address:string,
    password:string,
    confirmPassword:string,
    preference:string
  }
@Injectable({
  providedIn: 'root'
})
export class RegistartionServiceService {
  private url = "http://localhost:8080/register";
  constructor(private http:HttpClient) { }
  registerUser(data:forDataType):Observable<any>{
    return this.http.post(this.url,data,{
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
