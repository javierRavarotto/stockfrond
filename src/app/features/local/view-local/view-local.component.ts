import { Component, inject } from '@angular/core';
import { LocalService } from '../../../core/services/local/local.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-local',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-local.component.html',
  styleUrl: './view-local.component.css'
})
export class ViewLocalComponent {

  private localService = inject(LocalService)
locals:any=[]
  ngOnInit(): void {
    console.log("sdsd")
    this.localService.list().subscribe((locals:any )=>{
      console.log("esd")
      this.locals=locals
      console.log(locals)
    }, err =>{
      console.log(err)
      alert("este categoria tiene un color asosciado borrarlo antes")
   })
}  
public delete(local:any){
  
  this.localService.delete(local.id).subscribe(data =>{
  }, err =>{
     alert("este categoria tiene un color asosciado borrarlo antes")
  })
 }
}
