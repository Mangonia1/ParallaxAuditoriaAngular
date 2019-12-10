import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {


  usuarios:Usuario[];
  usuarios2:Usuario[];
  usuarioprincipal;
  lista = 'listausurios';
  lista2 = 'listausurios2';

  constructor(
    private usuarioservice: UsuariosService,
     private router:Router
  ) { }

  ngOnInit() {
    // this.usuarioservice.suscribir(this.lista);
    this.usuarioservice.getusuario().subscribe(data =>{
      this.usuarios=data
      // this.usuarioservice.enviarMensaje(data,this.lista);
    });


    this.usuarioservice.getusuariosinempresa().subscribe(data =>{
      this.usuarios2=data
   
    });
  
  // Esto es un current message---------------------------------------------
  // this.usuarioservice.currentMessage.subscribe(message =>{
  //   this.usuarios = message
  // });

  }


  eliminarMono(id)
  {
     
this.usuarioservice.destruirUsuario(id).subscribe(
  ()=> console.log(`Usuario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarMono(id)
  {
    this.router.navigate(['/editarusuario',id]);
    
  }

  ngOnDestroy(): void {
   // this.usuarioservice.cerrar(1);
  }


}
