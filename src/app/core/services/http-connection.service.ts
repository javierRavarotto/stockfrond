import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {
  private urlEndPoint: string = "http://localhost:8080/api"
  
  constructor(private http: HttpClient) { }

  ver(){
    console.log("this.urlEndPoint")
  }
  listar(){
    console.log(this.urlEndPoint)
    return this.http.get(this.urlEndPoint+"/lista")
  }
  // pokemons?: Pokemon[] = []

  // getPokemon(index: number): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(this.urlEndPoint + index)
  // }

  // createList() {
  //   for (let index = 1; index < 6; index++) {
  //     this.getPokemon(index).subscribe({
  //       next: (poke: Pokemon) => {
  //         this.pokemons?.push(poke)
  //       },
  //     })
  //   }
  // }
}
