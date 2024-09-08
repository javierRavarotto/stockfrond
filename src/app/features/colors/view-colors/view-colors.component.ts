import { Component, OnInit, inject } from '@angular/core';
import { ColorsService } from '../../../core/services/colors/colors.service';
import { Colors } from '../../../core/interface/Colors';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-colors',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-colors.component.html',
  styleUrl: './view-colors.component.css'  
})
export class ViewColorsComponent implements OnInit {

  private colorsService = inject(ColorsService)


colors:any ={}
private router = inject(Router);

  ngOnInit(): void {
    this.colorsService.list().subscribe((colors:any )=>{
      this.colors=colors
    })

  }
  public delete(color:any){
    console.log(color.id)
   this.colorsService.delete(color.id).subscribe(data =>{

   }, err =>{
      console.log(err)
      alert("este color esta en uso en una categoria")
   })
   
   
  }
}
