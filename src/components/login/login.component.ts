import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      userId:string='';
      password:string='';

    constructor(private loginService:LoginService,private router:Router){}

    onSubmit(){
      const payload = {
        userId:this.userId,
        password:this.password
      };
      console.log(payload);

      this.loginService.loginService(this.userId,this.password).subscribe({
        next:(res)=>{
        console.log('Login successful:', res);
        localStorage.setItem("loggedUser",res);
        alert("Login succesful");
        this,this.router.navigate(['/dashboard']);
      },
      error:(err)=>{
        console.error('Error:', err);
        alert('Login failed!');
      }
      })

    }
}
