import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CuestionariosService } from './cuestionarios.service';

import { UsuariosService } from '../usuarios/usuarios.service';


import { FormulariocuestionarioComponent } from './formulariocuestionario/formulariocuestionario.component';
import { ListacuestionarioComponent } from './listacuestionario/listacuestionario.component';
import { EditarcuestionarioComponent } from './editarcuestionario/editarcuestionario.component';
import { CrearpreguntaComponent } from './crearpregunta/crearpregunta.component';
import { RespondercuestionarioComponent } from './respondercuestionario/respondercuestionario.component';
import { ListaporcalificarComponent } from './listaporcalificar/listaporcalificar.component';
import { EmpresaformularioComponent } from './empresaformulario/empresaformulario.component';
import { EmpresalistaComponent } from './empresalista/empresalista.component';
import { EmpresaeditComponent } from './empresaedit/empresaedit.component';
import { EditpreguntaComponent } from './editpregunta/editpregunta.component';
import { VeresultadoComponent } from './veresultado/veresultado.component';


@NgModule({
  declarations: [FormulariocuestionarioComponent, ListacuestionarioComponent, EditarcuestionarioComponent, CrearpreguntaComponent, RespondercuestionarioComponent, ListaporcalificarComponent, EmpresaformularioComponent, EmpresalistaComponent, EmpresaeditComponent, EditpreguntaComponent, VeresultadoComponent],
  imports: [
    CommonModule,
    //UsuariosService,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CuestionariosService]
})
export class CuestionariosModule { }
