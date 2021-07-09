import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserI } from '../../modelos/usuario.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../modelos/response.interface'; 
import { AlertasService } from 'src/app/servicios/alertas/alertas.service'; 
import { LoginI } from 'src/app/modelos/login.interface';



@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router:Router, private alerta:AlertasService, private api:ApiService) { }

  errorStatus:boolean = false;
  errorMsj:any="";


  nuevoFor = new FormGroup({
    id: new FormControl(''),
    user: new FormControl(''),
    password: new FormControl('')
  }); 

  ngOnInit(): void {
  }

  onLogin(form:UserI){
    this.api.postUser(form).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.status == "true"){
        this.alerta.showsuccess(respuesta.response, 'Hecho')
        let email:any = respuesta.email;
        let user:any = respuesta.user;
        this.router.navigate(['code', email, user])
      }else{
        this.alerta.showError(respuesta.response,'Error')
      }
    })
  }

  crear(){
    this.router.navigate(['login']);
  }

}
