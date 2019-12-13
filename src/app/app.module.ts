import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CuestionariosModule } from './cuestionarios/cuestionarios.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule,
    NgxPaginationModule,
    CuestionariosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
