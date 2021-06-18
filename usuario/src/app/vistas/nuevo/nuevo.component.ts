import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserI } from '../../modelos/usuario.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../modelos/response.interface'; 
import { AlertasService } from 'src/app/servicios/alertas/alertas.service'; 

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private router:Router, private api:ApiService, private alerta:AlertasService) { }


  nuevoFor = new FormGroup({
    id: new FormControl(''),
    user: new FormControl(''),
    password: new FormControl('')
  }); 


  ngOnInit(): void {
  }

  postForm(form:UserI){
    this.api.postUser(form).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.status == "true"){
        this.alerta.showsuccess(respuesta.response, 'Hecho')
        this.router.navigate(['dashboard'])
      }else{
        this.alerta.showError(respuesta.response,'Error')
      }
    })
  }


  salir(){
    this.router.navigate(['dashboard']);
  }


}
