import { AfterViewInit, Component } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: false,
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
 
  constructor() { }

  ngAfterViewInit(): void {
  }
}
