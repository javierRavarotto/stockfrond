import { Component, inject } from '@angular/core';
import { ClothesService } from '../../../../core/services/clothes/clothes.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LocalService } from '../../../../core/services/local/local.service';
import { InventoryService } from '../../../../core/services/inventory/inventory.service';

@Component({
  selector: 'app-add-clothes-modal',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './add-clothes-modal.component.html',
  styleUrl: './add-clothes-modal.component.css'
})
export class AddClothesModalComponent {
  private InventoryService= inject(InventoryService)  
  private clothesService = inject(ClothesService)
  private localService = inject(LocalService)
clothes:any ={}
idLocal:number=0;
private activateRouter= inject(ActivatedRoute)
  ngOnInit(): void {
    this.clothesService.list().subscribe((clothes:any )=>{
      this.clothes=clothes
    })

  }
  public delete(clothes:any){
  
   this.clothesService.delete(clothes.id).subscribe(data =>{
    window.location.reload()
   }, err =>{
      alert("este categoria tiene un color asosciado borrarlo antes")
   })
  }


  public getId(){
    this.activateRouter.params.subscribe(params =>{    
      this.idLocal=params["id"]
    })
  }

addClothe(idClothe:any){
  this.getId()
  this.InventoryService.addClothe(this.idLocal,idClothe).subscribe(sd =>{
  })
  
  console.log("entro")
}

}
