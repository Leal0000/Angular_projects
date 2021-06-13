import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  //template:'<p style="text-align: center;">Aqui iria un empleado</p>',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:yellow}"]
})
export class EmpleadoComponent implements OnInit {


  nombre="Jesus";

  apellido="Leal";

  edad=19;

  llamaEmpresa(value:String){
     
  }
  
  userRegistrado=false;

  habilitacioncuadro=false;

  textoregistro="No hay nadie registrado";

  getRegistrousuario(){
    this.userRegistrado=false;
  }




  //cambiaEmpresa(event:Event){


    //this.empresa=(<HTMLInputElement>event.target).value;


  //}

  setusuarioregistrado(event:Event){
    //alert("Usuario Registrado");

    //alert(event.target);

    if((<HTMLInputElement>event.target).value == "si"){
      this.textoregistro="el usuario se acaba de registrar";
    }else{
      this.textoregistro="No hay nadie registrado";
    }

    
  }

  empresa="Clima confort";

  /*getEdad(){
    
    return this.edad;    
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
