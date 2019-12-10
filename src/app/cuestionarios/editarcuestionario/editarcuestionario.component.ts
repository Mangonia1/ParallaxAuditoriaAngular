import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { Usuario } from '../../usuarios/usuarios.model';
import { Empresa } from '../empresa.model';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-editarcuestionario',
  templateUrl: './editarcuestionario.component.html',
  styleUrls: ['./editarcuestionario.component.css']
})
export class EditarcuestionarioComponent implements OnInit {

  empresa:Empresa[];
  cuestionario:Cuestionario;
  usuarios:Usuario[];
  id:number ; 
  myForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router,
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
    
    this.cuestionario = this.cuestionariosservice.nuevocuestionarioedit();
    this.usuarioservice.getusuariosinempresa().subscribe(data =>this.usuarios=data);
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
    
    });


    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe(
      (usuario)=>this.cuestionario = usuario,
  (err:any) => console.log(err));
    

  }

  
  editarcuestionario():void{
    this.cuestionariosservice.editarCuestionario(this.cuestionario,this.id).subscribe(
      (data: void)=>{
        console.log(data);
        this.router.navigate(['/listacuestionario']);
      },(error:any)=>console.log(error)
    );
    this.cuestionario = this.cuestionariosservice.nuevocuestionarioedit();
    
    
    
      }


}
