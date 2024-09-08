import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ClothesService } from '../../../core/services/clothes/clothes.service';
import { Clothes } from '../../../core/interface/Clothes';
import { Colors } from '../../../core/interface/Colors';

@Component({
  selector: 'app-create-clothes',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create-clothes.component.html',
  styleUrl: './create-clothes.component.css'
})
export class CreateClothesComponent {
  titulo= "Crear Clothes"


  //injectables
  private activateRouter= inject(ActivatedRoute)
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private clothesService = inject(ClothesService)
  flag=true;
  clothes:Clothes={}
  color:Colors={}
  form =this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    category: ['', Validators.required],
    model: ['', Validators.required],
    image: ['', Validators.required], 
  })
  
  
  ngOnInit(): void { 
   
   this.seeFlag()
    this.get()
  }

  public get(){
    this.activateRouter.params.subscribe(params =>{
      const id = params["id"]
      this.clothesService.get(id).subscribe(clothes =>{
        this.clothes=clothes;
      }) 
    })
  }

  public create():void{
    const  clothes = this.form.value
    console.log(clothes)
  this.clothesService.create(clothes).subscribe(()=>{
    this.router.navigate(["viewClothes"])
  })
  } 

  public edit():void{
    const  clothesForm = this.form.value
    
    this.activateRouter.params.subscribe(params =>{
      const id = params["id"]
      this.clothesService.update(id, clothesForm).subscribe(sd =>{
      }) 
          this.router.navigate(["viewClothes"])
          
        })
  }
  public seeFlag(){
    this.activateRouter.params.subscribe(params =>{
      if (params["id"]) {
      
        this.flag=false 
      }else{
        this.flag=true
      }
    })
  }
  }

  


