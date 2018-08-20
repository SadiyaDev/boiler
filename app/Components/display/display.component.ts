import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { ContactService } from '../../Services/contactservice.service';
import { HttpModule } from '@angular/http';
import {ActivatedRoute} from'@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
contacts=[];
eventObjects;
  constructor(private route:ActivatedRoute,private _contactservice:ContactService) { }

  ngOnInit() {
    this._contactservice.getUsers()
    .subscribe(resEmployeeData => this.contacts = resEmployeeData);
    
    
    }
  }


