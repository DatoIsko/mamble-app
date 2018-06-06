import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { IType } from './weather/weather.component';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

  city: string = 'London';
  type: IType = IType.Celsius;
  extended: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
}
