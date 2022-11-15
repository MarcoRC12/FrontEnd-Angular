import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialesComponent } from './materiales/materiales.component';
import { ProgramasComponent } from './programas/programas.component';
import { TalleresComponent } from './talleres/talleres.component';
import { ActividadComponent } from './actividad.component';
import {RouterOutlet} from "@angular/router";

import {ProgramaService} from "../../providers/services/programa.service";
import {ActividadRoutingModule} from "./actividad-routing.module";
import { FormModalComponent } from './programas/form-modal/form-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

export let validateAndFlattenComponentImports = undefined;


@NgModule({
  declarations: [
    MaterialesComponent,
    ProgramasComponent,
    TalleresComponent,
    ActividadComponent,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    ReactiveFormsModule

  ],
  providers: [
    ProgramaService
  ]
})
export class actividadmodule {


}
