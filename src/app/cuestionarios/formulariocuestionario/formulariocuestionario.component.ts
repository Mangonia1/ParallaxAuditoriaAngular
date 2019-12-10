import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { Empresa } from '../empresa.model';
import { Usuario } from '../../usuarios/usuarios.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulariocuestionario',
  templateUrl: './formulariocuestionario.component.html',
  styleUrls: ['./formulariocuestionario.component.css']
})
export class FormulariocuestionarioComponent implements OnInit {

  empresa:Empresa[];
  cuestionario:Cuestionario;
  usuarios:Usuario[];
  idcreador;
  myForm:FormGroup;

  constructor(
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    public fb:FormBuilder
  ) { }

  ngOnInit() {

    this.cuestionariosservice.getEmpresa()
    .subscribe(data =>this.empresa=data);

    this.myForm=this.fb.group({
      nombrecuestionario:['',Validators.required],
      empresa:['',Validators.required],
      departamento:['',Validators.required],
      idcreador:['',Validators.required],
      usernameauditor:['',Validators.required]
    });
    
    this.idcreador = localStorage.getItem('miid');
    console.log('yo soy '+this.idcreador );

    this.cuestionario = this.cuestionariosservice.nuevocuestionario(this.idcreador);
    this.usuarioservice.getusuariosinempresa().subscribe(data =>this.usuarios=data);


  }

  agregarcuestionario():void{
    
    this.cuestionariosservice.agregarCuestionario(this.cuestionario).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
     this.cuestionario = this.cuestionariosservice.nuevocuestionario(this.idcreador);
     }

}
