import { Component, inject } from '@angular/core';
import { Colors } from '../../../core/interface/Colors';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ColorsService } from '../../../core/services/colors/colors.service';

@Component({
  selector: 'app-create-colors',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './create-colors.component.html',
  styleUrl: './create-colors.component.css'
})
export class CreateColorsComponent {
titulo= "Crear colores"


//injectables
private fb = inject(FormBuilder);
private router = inject(Router);
private colorsServicio = inject(ColorsService)

form =this.fb.group({
  name: ['', Validators.required],
  code: ["",Validators.required]
})


public create():void{
const  color = this.form.value
this.colorsServicio.create(color).subscribe(()=>{
  this.router.navigate(["viewColors"])
})

}

}
 