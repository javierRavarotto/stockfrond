import { Component, inject } from '@angular/core';
import { LocalService } from '../../../core/services/local/local.service';

@Component({
  selector: 'app-view-local-index',
  standalone: true,
  imports: [],
  templateUrl: './view-local-index.component.html',
  styleUrl: './view-local-index.component.css'
})
export class ViewLocalIndexComponent {

private localService = inject(LocalService)
locals:any={} 
  ngOnInit(): void {
    this.localService.list().subscribe((locals:any )=>{
      this.locals=locals
    })
} 
  
}
