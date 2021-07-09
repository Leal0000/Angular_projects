import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeI } from 'src/app/modelos/code.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-resend',
  templateUrl: './resend.component.html',
  styleUrls: ['./resend.component.css']
})
export class ResendComponent implements OnInit {

  resendForm = new FormGroup({
    user : new FormControl('', Validators.required) 
  })

  errorStatus:boolean = false;
  errorMsj:any="";
  email_code:any="";
  user_code:any="";


  constructor(private router:Router, private api:ApiService, private alerta: AlertasService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  resendCode(form:CodeI){
    this.api.resendCode(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      let user:any = dataResponse.user;
      let email:any = dataResponse.email;
      if(dataResponse.status == "true"){
        this.alerta.showsuccess(dataResponse.response, 'Reenviado');
        this.router.navigate(['code', email, user]);
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.response;
        this.alerta.showError(dataResponse.response,'Error');
      }
    })
  }

}
