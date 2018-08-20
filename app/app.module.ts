import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter/filter.pipe';
import { DisplayComponent } from './Components/display/display.component';
import { HomePageComponent } from './Components/homepage/homepage.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DisplayComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent 
    
   
  ],
  // modules to be used
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
