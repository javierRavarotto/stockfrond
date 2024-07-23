import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  private activateRouter= inject(ActivatedRoute)
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private localService = inject(LocalService)
  flag=true
  locals:any ={}
  form =this.fb.group({
    name: ['', Validators.required],
  
  })
  
  
  ngOnInit(): void {
    this.localService.list().subscribe((locals:any )=>{
        this.locals=locals
    })
    this.seeFlag()

  }
 

  
  public create():void{
  const  local = this.form.value
  this.localService.create(local).subscribe(()=>{
   this.router.navigate(["viewLocales"])
  })
  } 
  public edit():void{
    const  localForm = this.form.value
    this.activateRouter.params.subscribe(params =>{
      const id = params["id"]
      this.localService.update(id, localForm).subscribe(sd =>{
      })
          this.router.navigate(["viewLocales"])
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
