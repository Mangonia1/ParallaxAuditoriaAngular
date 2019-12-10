import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Empresa } from '../empresa.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../usuarios/usuarios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empresalista',
  templateUrl: './empresalista.component.html',
  styleUrls: ['./empresalista.component.css']
})
export class EmpresalistaComponent implements OnInit {

  empresa:Empresa[];
  
  usuarioprincipal;
  nombre:string;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuarioservice:UsuariosService,
     private router:Router
  ) { }

  ngOnInit() {

    this.cuestionarioservice.getEmpresa()
    .subscribe(data =>this.empresa=data);



    this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
      this.usuarioprincipal=data2
     );
  }

  eliminarempresa(id)
  {
this.cuestionarioservice.destruirEmpresa(id).subscribe(
  ()=> console.log(`Empresa with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarempres(id)
  {
    this.router.navigate(['/editarempresa',id]); 
  }

}
