import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thrid-page',
  standalone:false,
  templateUrl: './thrid-page.component.html',
  styleUrl: './thrid-page.component.css'
})
export class ThridPageComponent {
  constructor(private router: Router){}
 showSprinkles = false;
  sprinkleArray: { style: any }[] = [];

  launchSprinkles() {
    this.isbutton=true
    this.showSprinkles = true;
    this.sprinkleArray = [];

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * 100;
      const color = this.getRandomColor();
      const delay = Math.random() * 0.5;

      this.sprinkleArray.push({
        style: {
          left: `${x}px`,
          top: `${y}px`,
          backgroundColor: color,
          animationDelay: `${delay}s`
        }
      });
    }

    // Hide sprinkles after 2s
    setTimeout(() => {
      this.showSprinkles = false;
    }, 2000);
  }

  getRandomColor(): string {
    const colors = ['#ff4081', '#4caf50', '#2196f3', '#ffeb3b', '#9c27b0', '#ff9800'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  goTo(){
     this.audio.pause();        // 🔇 Stop the sound
    this.audio.currentTime = 0;
    this.router.navigate(['/fourth'])
  }
  isbutton=false
  isBlown = false;

blowCandle() {
  this.isBlown = true;
  this.blowButton=false
  this.launchSprinkles()
    this.audio.play();
    this.audio.loop = false;
}
blowButton=true

audio=new Audio('assets/birthdayMusic.mp3')
  
}
