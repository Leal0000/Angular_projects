import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CodeI } from 'src/app/modelos/code.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { ResendI } from 'src/app/modelos/resend.interface';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  codeForm = new FormGroup({
    user: new FormControl('',Validators.required),
    code: new FormControl('', Validators.required)
  })

  resendForm = new FormGroup({
    user : new FormControl('', Validators.required) 
  })


  errorStatus:boolean = false;
  errorMsj:any="";
  email_code:any="";
  user_code:any="";


  constructor(private api:ApiService, private router: Router, private alerta:AlertasService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let email = this.activerouter.snapshot.paramMap.get('email');
    let user = this.activerouter.snapshot.paramMap.get('user');
    this.email_code = email;
    this.user_code = user;
    this.codeForm.setValue({
      'user' : this.user_code,
      'code' : ""
    })
  }


  onCode(form: CodeI){
    this.api.confirmUser(form).subscribe(data => {
      console.log(data);
      let dataResponse:ResponseI = data;
      if(dataResponse.status == "true"){
        this.alerta.showsuccess(dataResponse.response, 'Confirmado');
        this.router.navigate(['login']);
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.response;
        this.alerta.showError(dataResponse.response,'Error');
      }
    })
  }

  resend(){
    this.router.navigate(['resend']);
  }
}
