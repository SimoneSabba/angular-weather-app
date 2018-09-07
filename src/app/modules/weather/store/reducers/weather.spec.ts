import * as weatherActions from '../actions/weather';
import{ mockedWeatherData, mockedReturnedData } from '../../utility/mockAPI';
import { initialState, reducer } from './weather';

describe ('Weather reducer ', function() {

    describe(' case undefined action ', function() {
        it ('should return initial state', function() {
            const action: any = {};
            const state = reducer(initialState, action);
            expect(state).toEqual(initialState);
        })
    });

    describe ('case LOAD_CITY_WEATHER', function() {
        it ('should return state with loading set to true', function() {
            const city = mockedWeatherData.city.name;
            const action = new weatherActions.LoadCityWeather(city);
            const state = reducer(initialState, action);
            expect(state.isLoading).toBe(true);
            expect(state.weather).toEqual([]);
            expect(state.hasError).toBe(false);
        })

    });

    describe ('case LOAD_CITY_WEATHER_SUCCESS', function() {
        it ('should return state with weather data', function() {
            const action = new weatherActions.LoadCityWeatherSuccess(mockedWeatherData);
            const state = reducer(initialState, action);
            expect(state.isLoading).toBe(false);
            expect(state.weather).toEqual([ mockedReturnedData ]);
            expect(state.hasError).toBe(false);
        })
    });

    describe ('case LOAD_CITY_WEATHER_FAIL', function() {
        it ('should return state with hasError set to true', function() {
            const action = new weatherActions.LoadCityWeatherFail({});
            const state = reducer(initialState, action);
            expect(state.isLoading).toBe(false);
            expect(state.weather).toEqual([]);
            expect(state.hasError).toBe(true);
        })
    });

})