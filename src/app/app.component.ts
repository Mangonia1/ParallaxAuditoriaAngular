import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  usuarioprincipal;

  constructor(
    private navegar:Router,
    private usuarioservice:UsuariosService
    ){}




  ngOnInit(): void {
    console.log('no seas tan credulo mcfly  '+localStorage.getItem('usuario'));
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


  title = 'auditoriapp';
}
