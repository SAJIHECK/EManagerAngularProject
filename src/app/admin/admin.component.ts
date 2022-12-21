import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackendService } from '../api-backend.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {

  constructor(private apiBackendService:ApiBackendService,private router:Router){}

  userArray:any=[]
  ngOnInit(){
    this.apiBackendService.getAlluser().subscribe((res)=>{
      this.userArray=res
      console.log(this.userArray)
     })
  }
  
  createUser(){
    this.router.navigate(['/create'])
  }

  editUser(id:any){
    this.router.navigate([`/edit/${id}`])
console.log(id)
  }

  deleteUser(userId:any){
    if(confirm('Are you sure you want to delete')){
    this.apiBackendService.deleteUser(userId).subscribe((res:any)=>{
     this.ngOnInit()
    })
  }
  }

  logOut(){
    this.router.navigate([''])
    localStorage.removeItem('sJwt');
  }
}
