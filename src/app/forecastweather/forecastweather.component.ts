import {Component} from "@angular/core";
import {IForecast} from "../interfaces/forecast.interface";
import {HttpClient,HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecastweather.component.html'
})
export class ForecastweatherComponent {
  data :IForecast | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    const url = 'http://api.openweathermap.org/data/2.5/forecast';
    let params = new HttpParams();
    params = params.append("q",'Hanoi');
    params = params.append("appid",'09a71427c59d38d6a34f89b47d75975c');
    params = params.append("units",'metric');
    this.http.get<IForecast>(url)
      .subscribe(value=>{
        this.data = value;
      })
  }
}
