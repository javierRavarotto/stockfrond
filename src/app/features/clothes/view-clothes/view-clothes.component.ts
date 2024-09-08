import { Component, OnInit, inject } from '@angular/core';
import { ClothesService } from '../../../core/services/clothes/clothes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-clothes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-clothes.component.html',
  styleUrl: './view-clothes.component.css'
})
export class ViewClothesComponent implements OnInit {

  
  private clothesService = inject(ClothesService)
clothes:any ={}

  ngOnInit(): void {
    this.clothesService.list().subscribe((clothes:any )=>{
      this.clothes=clothes
    })

  }
  public delete(clothes:any){
  
   this.clothesService.delete(clothes.id).subscribe(data =>{
    window.location.reload()
   }, err =>{
      console.log(err)
      alert("este categoria tiene un color asosciado borrarlo antes")
   })
  }
}
