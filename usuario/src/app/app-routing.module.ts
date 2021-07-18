import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { CodeComponent } from './vistas/code/code.component';
import { ResendComponent } from './vistas/resend/resend.component';
import { ForgotComponent } from './vistas/forgot/forgot.component';
import { ResetComponent } from './vistas/reset/reset.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'editar/:id', component:EditarComponent},
  {path:'new', component:NuevoUsuarioComponent},
  {path : 'code/:email/:user', component:CodeComponent},
  {path : 'resend' , component:ResendComponent},
  {path : 'forgot' , component:ForgotComponent},
  {path : 'reset/:email/:user', component:ResetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent, CodeComponent, ResendComponent, ForgotComponent, ResetComponent]
