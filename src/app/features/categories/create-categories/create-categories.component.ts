import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ColorsService } from '../../../core/services/colors/colors.service';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Colors } from '../../../core/interface/Colors';
import { Categories } from '../../../core/interface/Categories';
import { DATE_PIPE_DEFAULT_OPTIONS, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-categories',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create-categories.component.html',
  styleUrl: './create-categories.component.css'
})
export class CreateCategoriesComponent {

  titulo= "Crear colores"


  //injectables
  private activateRouter= inject(ActivatedRoute)
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private colorsService = inject(ColorsService)
  private categoriesService = inject(CategoriesService)
  category: Categories ={}
  cat:any
  colors:any ={}
  color:Colors={}
  value:any
  flag=true
  form =this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    
  })
   

 
  ngOnInit(): void {
    this.colorsService.list().subscribe((colors:Colors )=>{
        this.colors=colors
    })
    this.seeFlag()
  }
  public get(){
    this.activateRouter.params.subscribe(params =>{
      const id = params["id"]
      this.categoriesService.get(id).subscribe(category =>{
       
        this.category=category;
        if (this.category.color != null) {
          this.color=this.category.color  
        }    
      }) 
    })
  }

  public create():void{
    const  categoria = this.form.value
    this.categoriesService.create(categoria).subscribe(()=>{
    this.router.navigate(["viewCategories"])
  })
  }
  
  public edit():void{
    this.activateRouter.params.subscribe(params =>{
      if (params["id"]) {
        this.categoriesService.get(params["id"]).subscribe(categorie=>{
         
    const  categorieForm = this.form.value
          this.categoriesService.update(params["id"], categorieForm).subscribe(dato =>{
            this.router.navigate(["viewCategories"])
          })
          })
        this.flag=false 
      }else{
        this.flag=true
      }
    })


  }
  public seeFlag(){
    this.activateRouter.params.subscribe(params =>{
      if (params["id"]) {
        this.get()
        this.flag=false 
      }else{
        this.flag=true
      }
    })
  }

}
