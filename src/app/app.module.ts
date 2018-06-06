import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { PianoComponent } from './piano/piano.component';
import { WeatherComponent } from './weather-view/weather/weather.component';
import { ROUTES } from './app.routes';
import { HistogramComponent } from './histogram/histogram.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { WeatherService } from './weather-view/weather.service';
import { PianoService } from './piano/piano.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    WeatherComponent,
    HistogramComponent,
    WeatherViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [
    WeatherService,
    PianoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
