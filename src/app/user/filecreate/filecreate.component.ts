import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBackendService } from 'src/app/api-backend.service';

@Component({
  selector: 'app-filecreate',
  templateUrl: './filecreate.component.html',
  styleUrls: ['./filecreate.component.css']
})
export class FilecreateComponent {

  ngOnInit(){
    console.log(this.FileList.name+"list of files")
  }
  constructor(private apiBackendService:ApiBackendService,private router:Router){}
   formData = new FormData(); 
  
    FileList:any=[]
  loading=true

  onChange(event:any) {
    this.FileList.push(event.target.files[0]);
    console.log(this.FileList.length)
}

removeFIle(index:any){
 console.log(File)
  this.FileList.splice(index,1)
  
}



  onUpload(){

    for  (var i =  0; i <  this.FileList.length; i++)  { 
    this.formData.append("userfiles", this.FileList[i]);
    }
   
    this.apiBackendService.uploadFiles(this.formData).subscribe((res:any)=> { 
      console.log(res)
      if(res.fileId!=null){
        this.router.navigate(['/user'])
     }},(err) => {
    alert(err.error.sMessage);
  })
  
}
   shortLink:any

}
