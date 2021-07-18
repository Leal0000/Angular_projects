import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/modelos/login.interface';
import { Router } from '@angular/router'; 
import { ResponseI } from 'src/app/modelos/response.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = new FormGroup({
    user: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private api:ApiService, private router:Router, private alerta:AlertasService) { }


  errorStatus:boolean = false;
  errorMsj:any="";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
    else{
      this.router.navigate(['login']);
    }
  }

  onLogin(form: LoginI){
    this.api.loginByUser(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "true"){
        localStorage.setItem("token",data.token);
        this.router.navigate(['dashboard']);
        this.alerta.showsuccess(dataResponse.user, '¡Bienvenido!' )
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.response;
        this.alerta.showError(dataResponse.response, '¡Error!' )
      }
    })
  }

  crear(){
    this.router.navigate(['new']);
  }

  forgot(){
    this.router.navigate(['forgot']);
  }

}
