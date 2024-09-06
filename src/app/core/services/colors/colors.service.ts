import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Colors } from '../../interface/Colors';
import { Observable } from 'rxjs';
import { Url } from '../../interface/url';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  //injectables
  private http = inject(HttpClient)
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  private urlApi:string= Url.url + "colors"
  list(){
    return this.http.get(this.urlApi)
  }
  get(id: number):Observable<Colors>{
    return this.http.get(`${this.urlApi}/${id}`)
  }
  create(color:any){
    return this.http.post(this.urlApi, color)
  }
  update(id: any ,color:any){
    return this.http.put(`${this.urlApi}/${id}`, color)
  }
  delete(id: number){
    return this.http.delete(`${this.urlApi}/${id}`)
  }
  

}
