import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  registrado=false;
  post: Array<any>=[];

  constructor(){
    this.post=[

      {name:"Python"},
      {name:"C++"},

    ]
  }



  registrar(){
    this.registrado=true;
    this.mensaje="usuario registrado con exito";
  }
}
