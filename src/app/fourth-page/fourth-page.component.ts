import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourth-page',
  standalone:false,
  templateUrl: './fourth-page.component.html',
  styleUrl: './fourth-page.component.css'
})
export class FourthPageComponent {
  constructor(private router:Router){}
  lightsOn = false;

  turnOnLights() {
    this.lightsOn = true;
  }
  goTo(){
this.router.navigate(['/last'])
  }
}
