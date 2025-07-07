import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  standalone:false,
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {
constructor(private router:Router){}
goTo(){
  this.router.navigate(['/third'])
}
}
