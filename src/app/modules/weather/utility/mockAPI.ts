import { Weather } from '../model/weather';

export const mockedWeatherData: Weather = {
    'cod': '200',
    'message': 0.0054,
    'cnt': 8,
    'list': [
       {
          'dt': 1534863600,
          'main': {
             'temp': 30.89,
             'temp_min': 29.68,
             'temp_max': 30.89,
             'pressure': 997.63,
             'sea_level': 1027.76,
             'grnd_level': 997.63,
             'humidity': 47,
             'temp_kf': 1.2
          },
          'weather': [
             {
                'id': 500,
                'main': 'Rain',
                'description': 'light rain',
                'icon': '10d'
             }
          ],
          'clouds': {
             'all': 12
          },
          'wind': {
             'speed': 2.11,
             'deg': 286.503
          },
          'sys': {
             'pod': 'd'
          },
          'dt_txt': '2018-08-21 15:00:00'
       },
       {
          'dt': 1534874400,
          'main': {
             'temp': 25.58,
             'temp_min': 24.68,
             'temp_max': 25.58,
             'pressure': 998.11,
             'sea_level': 1028.09,
             'grnd_level': 998.11,
             'humidity': 59,
             'temp_kf': 0.9
          },
          'weather': [
             {
                'id': 500,
                'main': 'Rain',
                'description': 'light rain',
                'icon': '10d'
             }
          ],
          'clouds': {
             'all': 12
          },
          'wind': {
             'speed': 1.26,
             'deg': 289.507
          },
          'sys': {
             'pod': 'd'
          },
          'dt_txt': '2018-08-21 18:00:00'
       },
       {
          'dt': 1534885200,
          'main': {
             'temp': 19.88,
             'temp_min': 19.28,
             'temp_max': 19.88,
             'pressure': 998.9,
             'sea_level': 1029.06,
             'grnd_level': 998.9,
             'humidity': 85,
             'temp_kf': 0.6
          },
          'weather': [
             {
                'id': 801,
                'main': 'Clouds',
                'description': 'few clouds',
                'icon': '02n'
             }
          ],
          'clouds': {
             'all': 24
          },
          'wind': {
             'speed': 1.11,
             'deg': 355.501
          },
          'sys': {
             'pod': 'n'
          },
          'dt_txt': '2018-08-21 21:00:00'
       },
       {
          'dt': 1534896000,
          'main': {
             'temp': 17.61,
             'temp_min': 17.31,
             'temp_max': 17.61,
             'pressure': 999.03,
             'sea_level': 1029.14,
             'grnd_level': 999.03,
             'humidity': 88,
             'temp_kf': 0.3
          },
          'weather': [
             {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01n'
             }
          ],
          'clouds': {
             'all': 0
          },
          'wind': {
             'speed': 1.11,
             'deg': 37.001
          },
          'sys': {
             'pod': 'n'
          },
          'dt_txt': '2018-08-22 00:00:00'
       },
       {
          'dt': 1534906800,
          'main': {
             'temp': 16.39,
             'temp_min': 16.39,
             'temp_max': 16.39,
             'pressure': 998.51,
             'sea_level': 1028.71,
             'grnd_level': 998.51,
             'humidity': 87,
             'temp_kf': 0
          },
          'weather': [
             {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01n'
             }
          ],
          'clouds': {
             'all': 0
          },
          'wind': {
             'speed': 1.16,
             'deg': 75.0038
          },
          'sys': {
             'pod': 'n'
          },
          'dt_txt': '2018-08-22 03:00:00'
       },
       {
          'dt': 1534917600,
          'main': {
             'temp': 20.98,
             'temp_min': 20.98,
             'temp_max': 20.98,
             'pressure': 999.03,
             'sea_level': 1029.25,
             'grnd_level': 999.03,
             'humidity': 67,
             'temp_kf': 0
          },
          'weather': [
             {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '02d'
             }
          ],
          'clouds': {
             'all': 8
          },
          'wind': {
             'speed': 1.41,
             'deg': 72.0011
          },
          'sys': {
             'pod': 'd'
          },
          'dt_txt': '2018-08-22 06:00:00'
       },
       {
          'dt': 1534928400,
          'main': {
             'temp': 29,
             'temp_min': 29,
             'temp_max': 29,
             'pressure': 999.55,
             'sea_level': 1029.59,
             'grnd_level': 999.55,
             'humidity': 50,
             'temp_kf': 0
          },
          'weather': [
             {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
             }
          ],
          'clouds': {
             'all': 0
          },
          'wind': {
             'speed': 1.01,
             'deg': 215.501
          },
          'sys': {
             'pod': 'd'
          },
          'dt_txt': '2018-08-22 09:00:00'
       },
       {
          'dt': 1534939200,
          'main': {
             'temp': 30.29,
             'temp_min': 30.29,
             'temp_max': 30.29,
             'pressure': 998.92,
             'sea_level': 1028.95,
             'grnd_level': 998.92,
             'humidity': 44,
             'temp_kf': 0
          },
          'weather': [
             {
                'id': 803,
                'main': 'Clouds',
                'description': 'broken clouds',
                'icon': '04d'
             }
          ],
          'clouds': {
             'all': 56
          },
          'wind': {
             'speed': 1.92,
             'deg': 205.001
          },
          'sys': {
             'pod': 'd'
          },
          'dt_txt': '2018-08-22 12:00:00'
       }
    ],
    'city': {
       'id': 6539761,
       'name': 'Rome',
       'coord': {
          'lat': 41.8933,
          'lon': 12.4829
       },
       'country': 'IT',
       'population': 39199
    }
 };

 export const mockedReturnedData = {city: 'Rome - IT', '6pm': 26, '12am': 18, '6am': 21, '12pm': 30};
