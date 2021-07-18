import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ResendI } from 'src/app/modelos/resend.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgotForm = new FormGroup({
    user : new FormControl('', Validators.required)
  });

  errorStatus:boolean = false;
  errorMsj:any="";
  email_code:any="";
  user_code:any="";


  constructor(private api:ApiService, private router:Router, private alerta:AlertasService) { }

  ngOnInit(): void {
  }

  onForgot(form:ResendI){
    this.api.resetPassword(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "true"){
        let email = dataResponse.email;
        let user = dataResponse.user;
        this.alerta.showsuccess(dataResponse.response, 'Reenviado');
        this.router.navigate(['reset', email, user]);
      }
      else{
        this.alerta.showError(dataResponse.response, 'Error!');
        this.errorStatus = true;
        this.errorMsj = dataResponse.response;
      }
    });
  }

}
