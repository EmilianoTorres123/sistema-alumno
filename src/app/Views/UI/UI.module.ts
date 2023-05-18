import { NgModule } from '@angular/core';
import { UIRoutingModule } from './UI-routing.module';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { MenuComponent } from './menu';

import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { AlumnoComponent } from './alumno/alumno.component';

@NgModule({
  imports: [
    CommonModule,
    UIRoutingModule,
    FormsModule
  ],
  declarations: [
    InicioComponent

  ]
})

export class UIModule { }
