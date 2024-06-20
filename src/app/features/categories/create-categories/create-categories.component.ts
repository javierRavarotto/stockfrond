import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ColorsService } from '../../../core/services/colors/colors.service';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Colors } from '../../../core/interface/Colors';
import { Categories } from '../../../core/interface/Categories';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-categories',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './create-categories.component.html',
  styleUrl: './create-categories.component.css'
})
export class CreateCategoriesComponent {

  titulo= "Crear colores"


  //injectables
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private colorsServicio = inject(ColorsService)
  private categoriesServicio = inject(CategoriesService)
  category?: Categories ={}
  colors:any ={}
  color?:Colors={}
  value:any
  form =this.fb.group({
    name: ['', Validators.required],
    id: ['', Validators.required],
    
  })
  


  ngOnInit(): void {
    this.colorsServicio.list().subscribe((colors:any )=>{
        this.colors=colors
    })

  }
  
  public create():void{
   
    const  categoria = this.form.value

    this.colorsServicio.get(1).subscribe(color=>{
      this.color = color
    
    console.log(categoria.id)
    })
   
    

  this.categoriesServicio.create(categoria).subscribe(()=>{
   console.log("funciaona")
  })
  
  }
  

}
