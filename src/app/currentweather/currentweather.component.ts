import {Component} from "@angular/core";
import {ICurrentweather} from "../interfaces/currentweather.interface";
import {HttpClient} from "@angular/common/http";

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
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
      this.http.get<ICurrentweather>(url)
        .subscribe(value=>{
          this.data = value;
        });
  }
}
