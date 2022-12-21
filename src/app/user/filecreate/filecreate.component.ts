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
    console.log(File)
  }

  constructor(private apiBackendService:ApiBackendService,private router:Router){}
   formData = new FormData(); 
   File:any=[]
  loading=true

  onChange(event:any) {
    this.File = event.target.files[0];
    //console.log(this.File)
}

  onUpload(){

    this.formData.append("userfiles", this.File);
    this.apiBackendService.uploadFiles(this.formData).subscribe((res:any)=> { 
      console.log(res)

      if(res.fileId!=null){
        this.router.navigate(['/user'])
     }


     
  },(err) => {
    alert(err.error.sMessage);
  })

  }

   shortLink:any

}
