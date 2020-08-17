import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LocationService} from '../../services/location.service';
import {Location} from '../../models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers:[LocationService]
})
export class LocationsComponent implements OnInit {

  constructor(public locationService:LocationService) { }

  ngOnInit(): void {
    this.getLocations();
  }
 
  getLocations(){
    this.locationService.getLocations().subscribe( res =>{
      this.locationService.locations = res as Location[];
    }
    )
  }

  addLocation(form:NgForm){
    this.locationService.postLocation(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.getLocations();
    });
  }

  resetForm(form:NgForm){
    if(form){
      form.reset();
      this.locationService.selectedLocation = new Location();
    }
  }

}
