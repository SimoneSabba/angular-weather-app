import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { WeatherContainerComponent } from './weather.container';

import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

describe('WeatherContainerComponent', () => {
  let component: WeatherContainerComponent;
  let fixture: ComponentFixture<WeatherContainerComponent>;
  let dispatchSpy: jasmine.Spy;
  let citySearchSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainerComponent ],
      imports: [StoreModule.forRoot(
        {
          ...reducers,
          weather: combineReducers(reducers)
        }
      )],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerComponent);
    dispatchSpy = spyOn(TestBed.get(Store), 'dispatch');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('citySearch', function() {
    it('should dispatch an action when is executed', function() {
      const city = 'Rome';

      citySearchSpy = spyOn(component, 'citySearch').and.callFake(() => {
        dispatchSpy.call(null);
      });

      citySearchSpy(city);

      fixture.detectChanges();

      expect(citySearchSpy).toHaveBeenCalledWith(city);
      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

});
