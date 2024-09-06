import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Url } from '../../interface/url';

@Injectable({
  providedIn: 'root'
})
export class LocalService {



 //injectables
 private http = inject(HttpClient)
 private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
 private urlApi:string= Url.url + "local"
 list(){
   return this.http.get(this.urlApi)
 }
 get(id: number){
   return this.http.get(`${this.urlApi}/${id}`)
 }
 create(local:any){
   return this.http.post(this.urlApi, local)
 }
 update(id: number ,local:any){
   return this.http.put(`${this.urlApi}/${id}`, local)
 }
 delete(id: number){
   return this.http.delete(`${this.urlApi}/${id}`)
 }
 
 addStock(id: number){
  return this.http.put(`${this.urlApi}/addStock${id}`, id)
}

}
