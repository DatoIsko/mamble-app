import { Routes } from '@angular/router';
import { PianoComponent } from './piano/piano.component';
import { HistogramComponent } from './histogram/histogram.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather',      component: WeatherViewComponent },
  { path: 'histogram',      component: HistogramComponent },
  { path: 'piano',      component: PianoComponent },
];
