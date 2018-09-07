import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';

import { Observable } from 'rxjs/observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { WeatherService } from '../../weather.service';

import WeatherEffects from './weather.effect';
import * as weatherActions from '../actions/weather.actions';
import { mockedWeatherData, mockedReturnedData } from '../../utility/mockAPI';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('Weather Effects', () => {
  let actions$;
  let service;
  let effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
        WeatherEffects,
        { provide: Actions, useFactory: getActions }
      ]
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(WeatherService);
    effects = TestBed.get(WeatherEffects);

    spyOn(service, 'searchWeatherForCity').and.returnValue(of(mockedWeatherData));
  });

  describe('search city weather', () => {
    it('should return results from LoadCityWeatherSuccess', () => {
      const action = new weatherActions.LoadCityWeather('Rome');
      const onSuccess = new weatherActions.LoadCityWeatherSuccess(mockedWeatherData);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: onSuccess });

      expect(effects.loadCity$).toBeObservable(expected);
    });
  });
});
