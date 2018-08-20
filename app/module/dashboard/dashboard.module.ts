import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
//Components
import { HomePageComponent } from '../../Components/homepage/homepage.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
 
  ],
  declarations: [
    HomePageComponent
  ]
})
export class DashboardModule { }
