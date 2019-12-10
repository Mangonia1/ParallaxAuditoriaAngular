import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listacuestionario',
  templateUrl: './listacuestionario.component.html',
  styleUrls: ['./listacuestionario.component.css']
})
export class ListacuestionarioComponent implements OnInit {

  cuestionario:Cuestionario[];
  
  usuarioprincipal;
  nombre:string;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
     private router:Router
  ) { }

  ngOnInit() {

    if(localStorage.getItem('tipo') == 'Administrador')
    {
      this.cuestionarioservice.getCuestionarioadmin().subscribe(data =>this.cuestionario=data);
    this.nombre="auditorias";
    }
    else{
      console.log('mi id: '+localStorage.getItem('miid')+' mi username: '+localStorage.getItem('username'));
      this.cuestionarioservice.getCuestionario(localStorage.getItem('miid'),
      localStorage.getItem('username')).subscribe(data =>this.cuestionario=data);
      this.nombre="auditorias";
    }


    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );



  }

  
  eliminarquis(id)
  {
this.cuestionarioservice.destruirCuestionario(id).subscribe(
  ()=> console.log(`Cuestionario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarquis(id)
  {
    this.router.navigate(['/editarcuestionario',id]); 
  }

  agregarpregunta(id,nombre)
  {
    this.router.navigate(['/agregarpregunta',id]); 
  }

  responderquiss(id,nombre)
  {
    this.router.navigate(['/responderpregunta',id]); 
  }

  veresul(id,nombre)
  {
    this.router.navigate(['/veresultado',id]); 
  }

  calificarquiss(id)
  {
    this.router.navigate(['/listacalificar',id]); 
  }


}
