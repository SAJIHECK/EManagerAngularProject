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
      let blob:Blob=res.body as Blob;
      let url=window.URL.createObjectURL(blob);
      window.open(url);


      //let fileName=res.headers.get('Content-Disposition')
      //?.split(';')[1].split('=')[1];
      //let fileName="wallpaperflare.com_wallpaper (2).jpg"
      //console.log(fileName)
     // let a =document.createElement('a');
     // a.download=fileName;
     // a.href=url;
     // console.log(a)
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
