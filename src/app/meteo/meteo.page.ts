import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  weatherData :any;
  temperature: any;
  humidity: any;
  pressure: any;
  country: any;
  city:any;
  ngOnInit() {
  }
  meteo:any;
  constructor(private http:HttpClient){}


  getMeteo(){
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Rabat,ma&APPID=71af64ae0e21b37c27ba481ff70e465d&units=metric')
    .subscribe(
      (data)=>{
        this.weatherData= data;
        console.log(this.weatherData['main']);
        this.temperature= this.weatherData['main']['temp'];
        console.log(this.temperature);
        this.pressure=this.weatherData['main']['pressure'];
        this.humidity=this.weatherData['main']['humidity'];
        this.country=this.weatherData['sys']['country'];
        this.city=this.weatherData['name'];
        console.log(data);
        this.meteo=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
