import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LocalService } from '../../../core/services/local/local.service';

@Component({
  selector: 'app-create-local',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './create-local.component.html',
  styleUrl: './create-local.component.css'
})
export class CreateLocalComponent {
  titulo= "Crear colores"


  //injectables
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private localServicio = inject(LocalService)
  
  form =this.fb.group({
    name: ['', Validators.required],
  
  })
  
  
  public create():void{
  const  local = this.form.value
  this.localServicio.create(local).subscribe(()=>{
   console.log("finca")
   this.router.navigate([""])
  })
  
  }
  
}
