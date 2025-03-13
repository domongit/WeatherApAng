import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, map, mapTo } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

private  apiUrl:string ='https://api.openweathermap.org/data/2.5/weather?q={city}&appid=c115d83b2a63c69ef5edf0f39a4f7fbc&units=imperial';

formatedURl (city:string){
  return  this.apiUrl.replace('{city}',city);
 }

  constructor(private httpclnt :HttpClient) { }
  getDefaultWeather(city :string) : Observable<any>  {

    return this.httpclnt.get( this.formatedURl(city));
  }

}
