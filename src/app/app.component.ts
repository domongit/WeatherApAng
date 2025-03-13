import { Component, OnInit,Injectable } from '@angular/core';
import { count } from 'console';
import { nextTick } from 'process';
import {interval } from 'rxjs'
import {WeatherserviceService} from './weatherservice.service';
import { weather } from './weather.model';
 
 @Injectable({
   providedIn: 'root'
 })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'weatherapp';
  weatherdata:any  ;
  weatherObj :weather = new weather();


  constructor(private wsvc:WeatherserviceService){
  }

  onsomeaction(id:string){
  
    this.wsvc.getDefaultWeather(id).subscribe(data =>{
      this.weatherdata = data;
      console.log(this.weatherdata);
      this.weatherObj = new weather(this.weatherdata.main.temp,this.weatherdata.main.feels_like,this.weatherdata.main.temp_min ,this.weatherdata.main.temp_max,
        this.weatherdata.name,this.weatherdata.weather.length >0?this.weatherdata.weather[0].main:""
      );
      console.log(this.weatherObj);

    });

  }
}