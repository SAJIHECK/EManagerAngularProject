import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBackendService } from 'src/app/api-backend.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  public edited = true;

  constructor(private apiBackendService:ApiBackendService,private router:Router,private routr:ActivatedRoute){}

  userId:any

  ngOnInit(){
    this.userId=this.routr.snapshot.paramMap.get('id')
    if(this.userId){
      this.edited = false;
      this.apiBackendService.getUser(this.userId).subscribe((res:any)=>{
      this.user=res
      })
    }

  
  }

  user={
    firstName:'',
    lastName:'',
    userName:'',
    password:'',
    department:''
  }

  onSubmit(){
    if(this.userId){
      this.apiBackendService.createUser(this.user).subscribe((res:any)=> {
        console.log('edited')
      if(res.userId!=null){
        this.router.navigate(['/admin'])
     }
     
  })
    }else{
      this.apiBackendService.createUser(this.user).subscribe((res:any)=> {
        
    if(res.userId!=null){
      this.router.navigate(['/admin'])
   }
   
})
} }}
