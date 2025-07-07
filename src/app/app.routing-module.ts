import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThridPageComponent } from './thrid-page/thrid-page.component';
import { FourthPageComponent } from './fourth-page/fourth-page.component';
import { LastPageComponent } from './last-page/last-page.component';






const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'first', component:FirstPageComponent},
  {path:'second',component:SecondPageComponent},
  {path:'third', component:ThridPageComponent},
  {path:'fourth', component:FourthPageComponent},
  {path:'last', component:LastPageComponent}
   
   
  // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
