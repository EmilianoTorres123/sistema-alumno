import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio';
import { ListadoComponent } from './listado/listado.component';
import { BajaMateriaComponent } from './baja-materia';
import { Listas } from './listas';
import { AlumnoComponent } from './alumno';


const routes: Routes = [
  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Inicio/Baja_Materia', component: BajaMateriaComponent },
  { path: 'Inicio/Listado', component: ListadoComponent },
  { path: 'Inicio/Listas', component: Listas},
  { path: 'Inicio/perfil', component: AlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
