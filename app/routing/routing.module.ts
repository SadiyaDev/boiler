import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import{HomePageComponent} from '../Components/homepage/homepage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'', component:HomePageComponent}
    ])
  ],
  declarations: []
})
export class RoutingModule { }
