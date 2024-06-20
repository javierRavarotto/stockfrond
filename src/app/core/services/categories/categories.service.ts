import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Url } from '../../interface/url';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

 //injectables
 private http = inject(HttpClient)
 private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
 private urlApi:string= Url.url + "categories"
 list(){
   return this.http.get(this.urlApi)
 }
 get(id: number){
   return this.http.get(`${this.urlApi}/${id}`)
 }
 create(categorie:any){
   return this.http.post(this.urlApi, categorie)
 }
 update(id: number ,categorie:any){
   return this.http.put(`${this.urlApi}/${id}`, categorie)
 }
 delete(id: number){
   return this.http.delete(`${this.urlApi}/${id}`)
 }
  
}
