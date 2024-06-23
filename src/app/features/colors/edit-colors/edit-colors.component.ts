import { Component, OnInit, inject } from '@angular/core';
import { ColorsService } from '../../../core/services/colors/colors.service';

@Component({
  selector: 'app-edit-colors',
  standalone: true,
  imports: [],
  templateUrl: './edit-colors.component.html',
  styleUrl: './edit-colors.component.css'
})
export class EditColorsComponent implements OnInit {
  private colorsServicio = inject(ColorsService)
  colors:any ={}
  id=1
  ngOnInit(): void {
    this.colorsServicio.get(this.id).subscribe((colors:any )=>{
        this.colors=colors
    })

  }
  
}
 