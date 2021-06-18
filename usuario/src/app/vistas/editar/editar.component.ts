import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserI } from '../../modelos/usuario.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResponseI } from '../../modelos/response.interface'; 
import { AlertasService } from 'src/app/servicios/alertas/alertas.service'; 
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute , private router:Router, private api:ApiService, private alerta:AlertasService) { }


  datosUser:UserI | undefined;
  editarFor = new FormGroup({
    id: new FormControl(''),
    user: new FormControl(''),
    password: new FormControl('')
  }); 

  ngOnInit(): void {
    let id = this.activerouter.snapshot.paramMap.get('id');
    this.api.getUser(id).subscribe(data =>{
      this.datosUser = data;
      console.log(this.datosUser);
      this.editarFor.setValue({
        'id' : this. datosUser.id,
        'user' : this.datosUser.user,
        'password' : this.datosUser.password
      });

    })
  }
  postForm(form:UserI){
    let id = form.id;
    this.api.putUser(form, id).subscribe(data => {
      let respuesta:ResponseI = data;
      if(respuesta.status == "true"){
        this.alerta.showsuccess('Datos modificados', 'Hecho')
      }else{
        this.alerta.showError(respuesta.response,'Error')
      }

    })
    console.log(form);
  }

  eliminar(form:UserI){
    let id = form.id;
    this.api.deletUser(form, id).subscribe(data => {
      let mensaje = data;
     
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
