import { Injectable } from '@angular/core';
import { LoginI } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuariosi } from '../../modelos/usuarios.interface';
import { Observable } from 'rxjs';
import { UserI } from '../../modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string="http://127.0.0.1:4000/";

  constructor(private http:HttpClient ) {}

  loginByUser(form:LoginI):Observable<ResponseI>{
    //let header = new HttpHeaders()
    //.set('Type-content', 'aplication/json',)    
    let direccion = this.url + "api/login";
    return this.http.post<ResponseI>(direccion, form);
  }

  getUsers():Observable<Usuariosi[]>{
    let direccion = this.url + "user";
    return this.http.get<Usuariosi[]>(direccion);
  }

  getUser(id:any):Observable<UserI>{
    let direccion = this.url + "api/buscar/" + id;
    return this.http.get<UserI>(direccion);
  }

  putUser(form:UserI, id:any):Observable<ResponseI>{
    let direccion = this.url + "api/edit/" + id;
    return this.http.put<ResponseI>(direccion, form);
  }

  deletUser(form:UserI, id:any):Observable<ResponseI>{
    let direccion = this.url + "api/eliminar/" + id;
    let options = {
      headers : new HttpHeaders({
        'Conten-type' : 'application/json'
      }),
      body:form
    }
    return this.http.delete<ResponseI>(direccion, options);
  }

  postUser(form:UserI):Observable<ResponseI>{
    let direccion = this.url + "api/register";
    return this.http.post<ResponseI>(direccion, form);
  }
}