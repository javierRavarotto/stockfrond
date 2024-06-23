import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HttpConnectionService } from './core/services/http-connection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {

  constructor (private httpConnectionServicio:HttpConnectionService){
  };

  ngOnInit(): void {
   
    //  this.httpConnectionServicio.listar().subscribe(lugar =>(console.log("anda")))
  }
  
 
}



