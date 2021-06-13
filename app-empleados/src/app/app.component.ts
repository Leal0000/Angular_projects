import { Component } from '@angular/core';
import { Empleado } from './empleado.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empeados';

  empleados:Empleado[]=[

    new Empleado("Jesus","Leal","Jefe Mamalon",13000),
    new Empleado("Juana","Leal","Patrona",13000),
    new Empleado("Jorge Carlos","Ramirez Marin","Lame huevos",0),
    new Empleado("Tu Puta","Madre","Esclavo",15),
  ];

  agregarempleado(){
    let miEmpleado=new Empleado(this.cuadronombre, this.cuadroapellido, this.cuadrocargo, this.cuadrosalario);
    this.empleados.push(miEmpleado);
  }

  cuadronombre:string="";
  cuadroapellido:string="";
  cuadrocargo:string="";
  cuadrosalario:number=0;






}
