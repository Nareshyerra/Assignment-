import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  url = 'http://localhost:3000/employees';

  constructor(private httpclient: HttpClient) { }
getContacts(){

  // const httpHeaders = new HttpHeaders();
  // httpHeaders.append('content-type', "application/json");
  return this.httpclient.get(this.url);
}

saveUsers(data: any){
  // const httpHeaders = new HttpHeaders();
  // httpHeaders.append('content-type', "application/json");
 return this.httpclient.post("http://localhost:3000/employees", data)
}

updateContactdetails(id: any, updatebody: any){
  const newurl = 'http://localhost:3000/employees/' + id;
  return this.httpclient.put(newurl, updatebody)
}

deletecontact(id:any){
  const deleteurl = 'http://localhost:3000/employees/' + id;
  return this.httpclient.delete(deleteurl);

}
}
