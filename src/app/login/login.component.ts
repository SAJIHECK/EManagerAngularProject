import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiBackendService } from '../api-backend.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  AuthenticationRequest={
    sUserName: '',
    sPassword: ''
  }

  jwtToken="";

  hide = false;
  submit=false
  constructor(private fb:FormBuilder,private apiBackendService:ApiBackendService,private router:Router){}


  loginForm=this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]],
  })
  
  get AllControls(){
    return this.loginForm.controls
  }

  onsubmit(values:any){
    this.submit=true;
    this.AuthenticationRequest.sUserName=values.value.username
    this.AuthenticationRequest.sPassword=values.value.password
    this.apiBackendService.userLogin(this.AuthenticationRequest).subscribe((res:any)=>{
     localStorage.setItem('sJwt',res.jwtToken)
    console.log(res.userRole)
    if(res.userRole==='USER'){
    this.router.navigate(['/user']);
    }else{
    this.router.navigate(['/admin']);
     }
    },
    (err) => {
      alert(err.error.sMessage);
    }
    )
    }  }
