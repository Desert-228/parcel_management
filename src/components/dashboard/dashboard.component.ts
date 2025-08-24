import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
    userRole=null;
    userData = null;
    role:string = null;
  ngOnInit(): void {
    const storedUser = localStorage.getItem("loggedUser")
    if(storedUser){
        this.userData = JSON.parse(storedUser);
        this.userRole = this.userData.data.isAdmin;
        console.log(this.userData);
        console.log(this.userRole);

        if(this.userRole===false){
            this.role = "Customer"
        }
        else{
          this.role = "Admin"
        }
      }
    }
  constructor(private router:Router){  
    console.log(this.role);
  }

  




}
