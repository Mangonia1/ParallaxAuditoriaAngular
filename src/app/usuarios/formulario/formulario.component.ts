import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { CuestionariosService } from '../../cuestionarios/cuestionarios.service';
import { Empresa } from '../../cuestionarios/empresa.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { Usuario } from '../usuarios.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  empresa:Empresa[];

  usuario:Usuario;
  myForm:FormGroup;

  constructor(
    private cuestionarioservice: CuestionariosService,
    private usuariosservice:UsuariosService,
    public fb:FormBuilder
    ) { }

  ngOnInit() {

    this.cuestionarioservice.getEmpresa()
    .subscribe(data =>this.empresa=data);

    this.myForm=this.fb.group({
      nombre:['',Validators.required],
      apellidop:['',Validators.required],
      apellidom:['',Validators.required],
      tipo:['',Validators.required],
      username:['',Validators.required],
      idempresa:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required]
    });



    this.usuario = this.usuariosservice.nuevousuario();
  }

  agregarusuario():void{
    
    this.usuariosservice.agregarUsuario(this.usuario).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
     this.usuario = this.usuariosservice.nuevousuario();
     }


    //  irlogin():void{
    //   window.location.replace("login");
    // }

}
