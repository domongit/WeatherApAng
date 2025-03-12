import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map, mapTo } from 'rxjs';
import {weather}  from '../app/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
// "ApiKey": "c115d83b2a63c69ef5edf0f39a4f7fbc"
private apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=fairfax&appid=c115d83b2a63c69ef5edf0f39a4f7fbc&units=imperial';

  constructor(private httpclnt :HttpClient) { }
  getDefaultWeather()  {
     this.httpclnt.get<weather>(this.apiUrl).subscribe(data =>{
      console.log(data);
      
    });
  }

}
