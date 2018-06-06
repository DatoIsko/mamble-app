import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiRoot='http://api.openweathermap.org/data/2.5/weather'
  appId='e0cc4e50dd3036193729ae774e4d1a38';

  constructor(private http: HttpClient) {}

  getWeather({ city, units }): Observable<any> {
    let apiURL = `${this.apiRoot}?q=${city}${ units ? `&units=${units}` : ''}&appid=${this.appId}`;
    return this.http.get(apiURL);
  }
}
