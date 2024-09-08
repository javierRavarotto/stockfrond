import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LocalService } from '../../../../core/services/local/local.service';
import { InventoryService } from '../../../../core/services/inventory/inventory.service';

@Component({
  selector: 'app-view-stock',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './view-stock.component.html',
  styleUrl: './view-stock.component.css'
})


export class ViewStockComponent {
  private activateRouter= inject(ActivatedRoute)
  private inventoryService = inject(InventoryService)
  private fb = inject(FormBuilder);
  inventorys:any={} 
  id=0;
  form =this.fb.group({
    s: ['', Validators.required],
    m: ['', Validators.required],
    l: ['', Validators.required],
    xl: ['', Validators.required],
    doublexl: ['', Validators.required],
    triplexl: ['', Validators.required],
    fourxl: ['', Validators.required],
    mg: ['', Validators.required],
    
  })

  ngOnInit(): void {
     this.getId()
    this.inventoryService.list().subscribe((inventory:any )=>{
      this.inventorys=inventory
      console.log(inventory)
    })
  }

  public getId(){
    this.activateRouter.params.subscribe(params =>{    
      this.id=params["id"]
    })
  }
  save(idStock:number,){
    this.inventoryService.save(idStock,this.form).subscribe((inventory:any)=>{

    })
  }

}
