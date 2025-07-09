import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-image-slider',
 standalone:false,
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;
  @ViewChildren('captionText') captionTextRefs!: QueryList<ElementRef>;

  images = [
    { src: 'assets/us 1.jpeg', message: 'Our first photo together! 💝',type:'image' },
    { src: 'assets/us 2.jpeg', message: 'Rakhi 2K24 💝',type:'image' },
    { src: 'assets/solo 1.jpeg', message: '30-Jan-2k25' ,type:'image'},
    {src:'assets/solo 2.jpeg', message:'sundar 💝',type:'image'},
    {src:'assets/us 3.jpeg', message:'Best 💯🔥 ',type:'image'},
     {src:'assets/us 4.jpeg', message:'Smart to hu mai 😂 ',type:'image'},
    {src:'assets/solo 3.jpeg', message:'cute 😺',type:'image'},
    {src:'assets/solo 8.jpeg', message:'Mathura 2k23 😂😂', type:'image'},
     {src:'assets/us 10.jpeg', message:'10-jul-2k23💝 ',type:'image'},
 {src:'assets/solo 4.jpeg', message:'Fav  Atisundar 💝',type:'image'},
    { src: 'assets/us 5.jpeg', message: 'Rakhi 2k23' ,type:'image'},
    { src: 'assets/us 6.jpeg', message: 'Diwali 2k24 💝' ,type:'image'},
     {src:'assets/aaloo.jpeg', message:'Aaloo 🥔 ',type:'image'},
      {src:'assets/solo 9.jpeg', message:'chuiya 🐁', type:'image'},
 {src:'assets/solo 5.jpeg', message:'16-june-2k25',type:'image'},
 { src: 'assets/us 11.jpeg', message: 'U with ur handsome bhai 💝' ,type:'image'},
  {src:'assets/solo 6.jpeg', message:'16-june-2k25',type:'image'},
   {src:'assets/solo 10.jpeg', message:'cute 😺', type:'image'},
  {src:'assets/solo 7.jpeg', message:'cute 😺', type:'image'},
  { src: 'assets/us 7.jpeg', message: 'feb 2k23' ,type:'image'},
  {src:'assets/last.jpeg', message:'Happy birthday Bhindi 🎂',type:'image'},
  ];

  currentIndex = 0;

  ngAfterViewInit() {
    this.updateSlide();
    setTimeout(() => this.typeCaption(), 0); // Wait for view to init
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateSlide();
    setTimeout(() => this.typeCaption(), 50); // Wait for DOM to update
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateSlide();
    setTimeout(() => this.typeCaption(), 50); // Wait for DOM to update
  }

  updateSlide() {
    const slideWidth = window.innerWidth;
    this.slider.nativeElement.style.transform = `translateX(-${
      this.currentIndex * slideWidth
    }px)`;
  }

  typeCaption() {
    const captions = this.captionTextRefs.toArray();
    const currentCaptionEl = captions[this.currentIndex].nativeElement;

    const message = this.images[this.currentIndex].message;
    let i = 0;
    currentCaptionEl.textContent = ''; // Clear previous

    const interval = setInterval(() => {
      if (i < message.length) {
        currentCaptionEl.textContent += message.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }

}
