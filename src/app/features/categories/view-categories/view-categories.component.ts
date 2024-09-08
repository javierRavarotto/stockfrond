import { Component, OnInit, inject } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {

  private categoriesService = inject(CategoriesService)


categories:any ={}

  ngOnInit(): void {
    this.categoriesService.list().subscribe((categories:any )=>{
      this.categories=categories
    })

  }
  public delete(categorie:any){
  
   this.categoriesService.delete(categorie.id).subscribe(data =>{

   }, err =>{
      console.log(err)
      alert("este categoria tiene un color asosciado borrarlo antes")
   })
  }
}
