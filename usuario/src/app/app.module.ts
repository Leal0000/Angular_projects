import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
//import { LoginComponent } from './vistas/login/login.component';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { NuevoComponent } from './vistas/nuevo/nuevo.component';
//import { EditarComponent } from './vistas/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    NuevoUsuarioComponent
    
    //LoginComponent,
    //DashboardComponent,
    //NuevoComponent,
    //EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
