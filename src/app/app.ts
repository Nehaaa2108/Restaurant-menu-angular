import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  showNavbar = true;

  constructor(private router: Router){

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event:any) => {

      if(event.url === '/' ){
        this.showNavbar = false;
      }
      else{
        this.showNavbar = true;
      }

    });

  }

}