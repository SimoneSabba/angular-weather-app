import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherContainerComponent } from './weather.container';
import { WeatherService } from './weather.service';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from '../weather/store';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('weather', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [
    WeatherContainerComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
