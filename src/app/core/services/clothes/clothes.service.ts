import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Url } from '../../interface/url';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {



 //injectables
 private http = inject(HttpClient)
 private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
 private urlApi:string= Url.url + "clothes"
 list(){
   return this.http.get(this.urlApi)
 }
 get(id: number){
   return this.http.get(`${this.urlApi}/${id}`)
 }
 create(clothes:any){
   return this.http.post(this.urlApi, clothes)
 }
 update(id: number ,clothes:any){
   return this.http.put(`${this.urlApi}/${id}`, clothes)
 }
 delete(id: number){
   return this.http.delete(`${this.urlApi}/${id}`)
 }
}
