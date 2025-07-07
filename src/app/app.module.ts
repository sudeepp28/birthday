import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from "./app.routing-module";

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { SecondPageComponent } from "./second-page/second-page.component";
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { ThridPageComponent } from "./thrid-page/thrid-page.component";
import { FourthPageComponent } from "./fourth-page/fourth-page.component";
import { LastPageComponent } from "./last-page/last-page.component";










@NgModule({
    declarations:[AppComponent,
        HomeComponent,FirstPageComponent,SecondPageComponent,ImageSliderComponent,ThridPageComponent,FourthPageComponent,LastPageComponent
       ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule]
})

export class AppModule{}