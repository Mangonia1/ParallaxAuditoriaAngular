import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import { FormularioComponent} from './usuarios/formulario/formulario.component';
import { ListaComponent} from './usuarios/lista/lista.component';
import { FormularioeditarComponent } from './usuarios/formularioeditar/formularioeditar.component';
import { FormulariocuestionarioComponent } from './cuestionarios/formulariocuestionario/formulariocuestionario.component';
import { EditarcuestionarioComponent } from './cuestionarios/editarcuestionario/editarcuestionario.component';
import { ListacuestionarioComponent } from './cuestionarios/listacuestionario/listacuestionario.component';
import { ListaporcalificarComponent } from './cuestionarios/listaporcalificar/listaporcalificar.component';
import { EditpreguntaComponent } from './cuestionarios/editpregunta/editpregunta.component';
import { CrearpreguntaComponent } from './cuestionarios/crearpregunta/crearpregunta.component';
import { RespondercuestionarioComponent } from './cuestionarios/respondercuestionario/respondercuestionario.component';
import { EmpresaeditComponent } from './cuestionarios/empresaedit/empresaedit.component';
import { EmpresaformularioComponent } from './cuestionarios/empresaformulario/empresaformulario.component';
import { EmpresalistaComponent } from './cuestionarios/empresalista/empresalista.component';
import { VeresultadoComponent } from './cuestionarios/veresultado/veresultado.component';
import { LoginGuard } from './login.guard';
import { RolGuard } from './rol.guard';
import { RolGuard2 } from './rol.guard2';
import { RolGuard3 } from './rol.guard3';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {path: 'menu',component: MenuComponent},
    //-----------------RUTAS USUARIO--------------------
    {path: '',component: LoginComponent},
    {path: 'formulariousuario',component: FormularioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listausuario',component: ListaComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'editarusuario/:id',component:FormularioeditarComponent, canActivate:[LoginGuard, RolGuard]},


    //-----------------RUTAS EMPRESA--------------------
    // {path: '',component: LoginComponent},
    {path: 'formularioempresa',component: EmpresaformularioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listaempresa',component: EmpresalistaComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'editarempresa/:id',component:EmpresaeditComponent, canActivate:[LoginGuard, RolGuard]},


//-----------------RUTAS Cuestionario--------------------
    {path: 'formulariocuestionario',component: FormulariocuestionarioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'listacuestionario',component: ListacuestionarioComponent, canActivate:[LoginGuard]},
    //{path: 'listacalificar/:id',component: ListaporcalificarComponent, canActivate:[LoginGuard]},
    {path: 'editarcuestionario/:id',component: EditarcuestionarioComponent, canActivate:[LoginGuard, RolGuard]},
    {path: 'veresultado/:id',component: VeresultadoComponent, canActivate:[LoginGuard, RolGuard]},

//-----------------RUTAS Pregunta--------------------
{path: 'agregarpregunta/:id',component: CrearpreguntaComponent, canActivate:[LoginGuard, RolGuard3]},
{path: 'editarpregunta/:id/:id2',component: EditpreguntaComponent, canActivate:[LoginGuard, RolGuard3]},
{path: 'responderpregunta/:id',component: RespondercuestionarioComponent, canActivate:[LoginGuard, RolGuard3]}

  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  