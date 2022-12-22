import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBackendService {

  constructor(private http:HttpClient) { }

  userLogin(data:any){
    return this.http.post<any>('http://localhost:8081/authenticate',data);
  }

  getAlluser(){
    return this.http.get<any>('http://localhost:8081/getAllUsers');
  }

  createUser(user:any){
    return this.http.post<any>('http://localhost:8081/createUser',user);
  }

  getUser(userId:any){
    return this.http.get<any>(`http://localhost:8081/getUser?userId=${userId}`)
  }

  deleteUser(userId:any){
    return this.http.delete<any>(`http://localhost:8081/deleteUser?userId=${userId}`)
  }

  getAllFile(){
    return this.http.get<any>('http://localhost:8081/getAllFiles');
  }

  uploadFiles(FormData:any){
    return this.http.post<any>('http://localhost:8081/uploadfile',FormData);
  }

  deleteFile(fileId:any){
    return this.http.delete<any>(`http://localhost:8081/deleteFile?fileId=${fileId}`)
  }

  downloadFile(fileId:any){
    return this.http.get(`http://localhost:8081/downloadFile?fileId=${fileId}`,{observe:'response',responseType:"blob"})
  } 
}
