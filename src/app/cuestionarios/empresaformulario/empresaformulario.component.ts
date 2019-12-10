import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Empresa } from '../empresa.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-empresaformulario',
  templateUrl: './empresaformulario.component.html',
  styleUrls: ['./empresaformulario.component.css']
})
export class EmpresaformularioComponent implements OnInit {

  empresa:Empresa;
  myForm:FormGroup;


  constructor(
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    public fb:FormBuilder
  ) { }

  ngOnInit() {


    this.myForm=this.fb.group({
      nombre:['',Validators.required],
      giro:['',Validators.required]
    });
    this.empresa = this.cuestionariosservice.nuevoempresa();

  }

  agregarempresa():void{
    
    this.cuestionariosservice.agregarEmpresa(this.empresa).subscribe(
      (data)=>{
        console.log(data);
      },(error:any)=>console.log(error)
    );
    this.empresa = this.cuestionariosservice.nuevoempresa();

     }

}
