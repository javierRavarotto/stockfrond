import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Url } from '../../interface/url';

@Injectable({
  providedIn: 'root'
})
export class InventoryService{

 private http = inject(HttpClient)
 private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
 private urlApi:string= Url.url + "inventary"
 

 list(){
  return this.http.get(this.urlApi)
}
 addClothe(idLocal:number,idClothe:number){
  alert("Se agrego la prenda correctamente")
  return this.http.put(`${this.urlApi}/${idLocal}/addClothe`,idClothe)
 }
save(idStock:number, clotheStock:any){
  return this.http.put(`${this.urlApi}/${idStock}/addClothe`,clotheStock) 
}


}
