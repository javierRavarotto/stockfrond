import { Component, inject } from '@angular/core';
import { Colors } from '../../../core/interface/Colors';
import { FormBuilder, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ColorsService } from '../../../core/services/colors/colors.service';

@Component({
  selector: 'app-create-colors',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './create-colors.component.html',
  styleUrl: './create-colors.component.css'
})
export class CreateColorsComponent {
titulo= "Crear colores"


//injectables
private activateRouter= inject(ActivatedRoute)
private fb = inject(FormBuilder);
private router = inject(Router);
private colorsServicio = inject(ColorsService)
flag= true
color:Colors={}
form =this.fb.group({
  name: ['', Validators.required],
  code: ["",Validators.required]
})


ngOnInit(): void {
  this.seeFlag()
  this.getColor()
  }

public getColor(){

  this.activateRouter.params.subscribe(params =>{ 
    const id = params["id"]
      
    this.colorsServicio.get(id).subscribe( color =>{
      this.color=color
    })
})
}
public create():void{
const  color = this.form.value
this.colorsServicio.create(color).subscribe(()=>{
  this.router.navigate(["viewColors"])
})
}

public edit():void{
  const  color = this.form.value
  this.colorsServicio.update(1, color).subscribe(sd =>{

  })
  this.activateRouter.params.subscribe(params =>{
   
    
      const id = params["id"]
        
        console.log("sdssdsdsdsd")
        this.router.navigate(["viewColors"])
  })
}

public seeFlag(){
  this.activateRouter.params.subscribe(params =>{
    console.log(params["id"])
    
    if (params["id"]) {
    
   
      this.flag=false 
    }else{
      this.flag=true
    }
  })
}
}
 