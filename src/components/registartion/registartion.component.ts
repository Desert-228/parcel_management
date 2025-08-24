import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RegistartionServiceService } from '../../services/registartion-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-registartion',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './registartion.component.html',
  styleUrl: './registartion.component.css'
})
export class RegistartionComponent {
  formData = {
    userId:'',
    name:'',
    email:'',
    countryCode:'',
    mobileNumber:'',
    address:'',
    password:'',
    confirmPassword:'',
    preference:''
  }
  constructor(private registartionService:RegistartionServiceService){}
  onSubmit(){
    
    if(this.formData.password!=this.formData.confirmPassword){
      alert("Passwords doesn't match");
      return;
    }
    console.log(this.formData.password);
    console.log(this.formData.confirmPassword);
    const payload = {
      userId:this.formData.userId,
      userName:this.formData.name,
      email:this.formData.email,
      countryCode:this.formData.countryCode,
      mobileNumber:this.formData.mobileNumber,
      address:this.formData.address,
      password: this.formData.password,
      confirmPassword:this.formData.confirmPassword,
      preferences: this.formData.preference
    };

    console.log(payload);

    this.registartionService.registerUser(this.formData).subscribe({
      next:(res)=>{
        console.log('Registration successful:', res);
        alert('Registration successful!');
      },
      error:(err)=>{
        console.error('Error:', err);
        alert('Registration failed!');
      }
    });


  }

}
