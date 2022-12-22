import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackendService } from '../api-backend.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private apiBackendService:ApiBackendService,private router:Router){}

  userArray:any=[]
  ngOnInit(){
    this.apiBackendService.getAllFile().subscribe((res)=>{
      this.userArray=res
      console.log(this.userArray)
     })
  }
  
  createFile(){
    this.router.navigate(['/createfile'])
  }

  downloadUser(fileId:any){
    this.apiBackendService.downloadFile(fileId).subscribe((res:any)=>{
      //let fileName=res.headers.get('Content-Disposition')
      //?.split(';')[1].split('=')[1];
      //fileName="haloo.jpg"
      let blob:Blob=res.body as Blob;
      let url=window.URL.createObjectURL(blob);
      window.open(url);
     // let a =document.createElement('a');
      //a.download=fileName;
      //a.href=window.URL.createObjectURL(blob);
     // a.click;

     })
}

  deleteFile(fileId:any){
    if(confirm('Are you sure you want to delete')){
    this.apiBackendService.deleteFile(fileId).subscribe((res:any)=>{
     this.ngOnInit()
    })
  }
  }

  logOut(){
    this.router.navigate([''])
    localStorage.removeItem('sJwt');
  }



}
