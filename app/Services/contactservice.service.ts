import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {
  private _url :string = "assets/file.json"
  constructor(private _http:Http) { }
  getUsers(){
    //mapping the json data into the servive
    return this._http.get(this._url)
     .map((response:Response) => response.json());
  }
}



