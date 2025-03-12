import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { nextTick } from 'process';
import {interval } from 'rxjs'
import {WeatherserviceService} from './weatherservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'weatherapp';

  constructor(private wsvc:WeatherserviceService){

  }

  onsomeaction(id:string){
    alert(id);
    this.wsvc.getDefaultWeather();

  }
}