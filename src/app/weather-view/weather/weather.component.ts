import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';

enum IUnits {
  Standard = 'standard',
  Metric = 'metric',
  Imperial = 'imperial'
}

export enum IType {
  Kelvin = 'kelvin',
  Farenheit = 'farenheit',
  Celsius = 'celsius'
}

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnChanges, OnDestroy {

  @Input() city: string = 'London';
  @Input() type: IType = IType.Celsius;
  @Input() extended: boolean = false;
  subsc: any;
  isDay: boolean = true;
  weather: any = {};

  units: IUnits = IUnits.Metric;
  forecast: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather({ city: this.city, units: this.units });
    const d = new Date();
    const hour = d.getHours();
    if (hour >= 18 || hour < 6) {
      this.isDay = false;
    }

    let forecast = this.weather && this.weather.weather && this.weather.weather.length && this.weather.weather[0].main;
    switch (forecast) {
      case 'Clouds':
      case 'Sunny':
        this.forecast = 'cloudy';
        break;
      case 'Mostly Cloudy':
      case 'Mostly Sunny':
      case 'Scattered Clouds':
      case 'Partly Cloudy':
      case 'Partly Sunny':
      case 'Cloudy':
        this.forecast = 'cloudy';
        break;
      case 'Rain':
        this.forecast = 'rainy';
        break;
      case 'Thunderstorm':
      case 'Thunderstorms':
        this.forecast = 'stormday';
        break;
      case 'Mist':
      case 'Overcast':
        this.forecast = 'haze';
    }
  }

  ngOnChanges() {
    this.getWeather({ city: this.city, units: this.units });
  }

  changeUnit(type) {
    switch (type) {
      case IType.Celsius:
        this.units = IUnits.Metric;
        break;
      case IType.Farenheit:
        this.units = IUnits.Imperial;
        break;
      case IType.Farenheit:
      default:
        this.units = IUnits.Standard;
    }
  }

  getWeather({ city, units }) {
    this.subsc = this.weatherService.getWeather({ city, units })
      .subscribe((data) => {
        this.weather = { ...data };
        console.log(data);
      });
  }

  update(city) {
    this.changeUnit(this.type);
    this.city = city;
    this.getWeather({ city, units: this.units })
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }
}
