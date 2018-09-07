import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

import { reducers, CityWeatherState } from '../reducers';
import { getIsLoading, getHasError, getWeather } from './weather.selector';
import { LoadCityWeather, LoadCityWeatherSuccess, LoadCityWeatherFail } from '../actions/weather.actions';
import{ mockedWeatherData, mockedReturnedData } from '../../utility/mockAPI';

describe('Weather Selectors', () => {
  let store: Store<CityWeatherState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...reducers,
          weather: combineReducers(reducers)
        })
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it ('should return isLoading ', function() {
      let isLoading;

      store.select(getIsLoading).subscribe(value => isLoading = value);
      expect(isLoading).toBe(false);
      store.dispatch(new LoadCityWeather(mockedWeatherData.city.name));
      expect(isLoading).toBe(true);
  })

  it ('should return the weather object ', function() {
        let weather;

        store.select(getWeather).subscribe(value => weather = value);
        expect(weather).toEqual([]);
        store.dispatch(new LoadCityWeatherSuccess(mockedWeatherData));
        expect(weather).toEqual([ mockedReturnedData ]);
    })

    it ('should return hasError ', function() {
        let hasError;

        store.select(getHasError).subscribe(value => hasError = value);
        expect(hasError).toBe(false);
        store.dispatch(new LoadCityWeatherFail({}));
        expect(hasError).toBe(true);
    })

});
