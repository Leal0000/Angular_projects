import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ResetI } from 'src/app/modelos/reset.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {



  resetForm = new FormGroup({
    user: new FormControl('',Validators.required),
    code: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  })


  errorStatus:boolean = false;
  errorMsj:any="";
  email_code:any="";
  user_code:any="";
  password:any="";

  constructor(private route:Router, private api:ApiService, private alerta:AlertasService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let email:any = this.activerouter.snapshot.paramMap.get('email');
    let user:any = this.activerouter.snapshot.paramMap.get('user');
    this.user_code = user;
    this.email_code = email;
    this.resetForm.setValue({
      'user' : this.user_code,
      'code' : "",
      'password' : ""
    });
  }

  resetCode(form:ResetI){
    this.api.confirmReset(form).subscribe(data => {
      let dataResponse:ResponseI = data;
      console.log(data);
      if(dataResponse.status == "true"){
        this.alerta.showsuccess(dataResponse.response, 'Successfully Reset');
        this.route.navigate(['login']);
      }
      else{
        this.errorStatus = true;
        this.errorMsj = "Code is invalid or password is invalid";
        this.alerta.showError(dataResponse.response, 'Error');
      }
    });
  }

}
