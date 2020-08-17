import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms'
import {Location} from '../models/location'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  selectedLocation: Location;
  locations: Location[];
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
     this.selectedLocation = new Location();
  }

  getLocations(){
    return this.http.get(this.URL_API);
  }
  postLocation(location:Location){
    return this.http.post(this.URL_API,location);     
  }

}
