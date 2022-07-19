import {Component} from "@angular/core";
import {ICurrentweather} from "../interfaces/currentweather.interface";
import {HttpClient,HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-currentweather',
  templateUrl:'./currentweather.component.html'
})
export class CurrentweatherComponent {
    data: ICurrentweather | undefined;

    // tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) { //hàm này tự động chạy sau khi tạo component
  }

  ngOnInit(){ // hàm này tự động chạy sau khi print html xong
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      let params = new HttpParams();
      params =  params.append('q','Hanoi');
      params =  params.append('appid','09a71427c59d38d6a34f89b47d75975c');
      params =  params.append('units','metric');
      this.http.get<ICurrentweather>(url,{params: params})
        .subscribe(value=>{
          this.data = value;
        });
  }
}
