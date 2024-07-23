import { Component,inject,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { HttpConnectionService } from './core/services/http-connection.service';
import { HttpClient } from '@angular/common/http';
import { LocalService } from './core/services/local/local.service';

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
   
    }
  
 
}



