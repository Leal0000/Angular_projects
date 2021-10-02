import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data_temp: any = [];
  data_temp_real : any = 0;
  data_humd_real : any = 0;



  constructor(private api: ApiService, private alerta: AlertasService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.getTemps();
      this.getTempReal();
    }
    else{
      this.router.navigate(['login'])
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  async getTemps() {
    await this.api.getTemperature().subscribe(data => {
      console.log(data);
      this.data_temp = data;
    });
  }

  async getTempReal(){
    await this.api.getTemperatureReal().subscribe(data => {
      if(data){
        this.data_temp_real = data.temp;
        this.data_humd_real = data.humd;
      }
    });
  }

}
