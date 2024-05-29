import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ProveedoresComponent } from './pages/contacto/proveedores.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'proveedores',component:ProveedoresComponent},
  {path:'contacto',component:EmpleadosComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'servicio',component:NosotrosComponent},
  {path:'carrito',component:CarritoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
