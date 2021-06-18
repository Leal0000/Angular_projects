import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { Usuariosi } from '../../modelos/usuarios.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { }

  usuarios:Usuariosi[]=[];

  ngOnInit(): void {
    if(localStorage.getItem('token')){
     this.api.getUsers().subscribe(data => {
     this.usuarios = data;
    }) 
    }
    else{
      this.router.navigate(['login']);
    } 
   
  }

  editarUsuario(id:number){
    this.router.navigate(['editar', id]);
  }

  agregarUsuario(){
    this.router.navigate(['nuevo']);

  }

  Logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }




}
