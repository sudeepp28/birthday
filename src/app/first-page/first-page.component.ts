import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone:false,
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {
constructor(private router:Router){}
goTo(){
  this.router.navigate(['/second'])
}
}
