import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private navegar:Router, private usuarioservice:UsuariosService) { }

  usuarioprincipal;

  ngOnInit() {
    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('miid');
    localStorage.removeItem('tipo');
    localStorage.removeItem('username');
    //  localStorage.removeItem('channel');
    alert('Sesion cerrada');
    this.navegar.navigate(['']);
    window.location.reload();
  }

}
