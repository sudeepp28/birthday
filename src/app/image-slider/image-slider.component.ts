import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-slider',
 standalone:false,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  testimonials = [
  {src:'assets/1.jpeg',message:'💖'},
  {src:'assets/2.jpeg',message:'💖'},
  {src:'assets/3.jpeg',message:'💖'},
  {src:'assets/4.jpeg',message:'💖'},
  {src:'assets/5.jpeg',message:'💖'},
  {src:'assets/6.jpeg',message:'😼😼'},
  {src:'assets/7.jpeg',message:'💖'},
  {src:'assets/8.jpeg',message:'💖'},
  {src:'assets/9.jpeg',message:'💖'},
  {src:'assets/10.jpeg',message:'💖'},
  ];

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

 nextSlide() {
  this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  this.resetAutoplay();
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  this.resetAutoplay();
}

goToSlide(index: number) {
  this.currentSlide = index;
  this.resetAutoplay();
}
resetAutoplay() {
  clearInterval(this.interval); // stop current interval
  this.startAutoplay();         // start new interval
}


  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  touchStartX = 0;
touchEndX = 0;

handleTouchStart(event: TouchEvent) {
  this.touchStartX = event.changedTouches[0].screenX;
}

handleTouchEnd(event: TouchEvent) {
  this.touchEndX = event.changedTouches[0].screenX;
  this.handleSwipeGesture();
}

handleSwipeGesture() {
  const deltaX = this.touchEndX - this.touchStartX;

  // Minimum swipe distance threshold
  const minSwipeDistance = 50;

  if (deltaX > minSwipeDistance) {
    // Swiped right → previous slide
    this.prevSlide();
  } else if (deltaX < -minSwipeDistance) {
    // Swiped left → next slide
    this.nextSlide();
  }
}

}
