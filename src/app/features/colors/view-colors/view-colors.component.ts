import { Component, OnInit, inject } from '@angular/core';
import { ColorsService } from '../../../core/services/colors/colors.service';
import { Colors } from '../../../core/interface/Colors';
import { RouterLink } from '@angular/router';

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

  ngOnInit(): void {
    this.colorsService.list().subscribe((colors:any )=>{
      this.colors=colors
    })

  }

}
