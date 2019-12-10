import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios.model';
import { UsuariosService } from '../usuarios.service';
import { CuestionariosService } from '../../cuestionarios/cuestionarios.service';
import { Empresa } from '../../cuestionarios/empresa.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formularioeditar',
  templateUrl: './formularioeditar.component.html',
  styleUrls: ['./formularioeditar.component.css']
})
export class FormularioeditarComponent implements OnInit {
  
  empresa:Empresa[];

  usuario:Usuario;
  myForm:FormGroup;
  usuario2;
  id:number ; 

  constructor(
    private route:ActivatedRoute,
    private cuestionarioservice: CuestionariosService,
    private usuariosservice:UsuariosService,
    private router:Router,
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

    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
    
    });

    this.usuariosservice.getusuariouno(this.id).
    subscribe(
      (usuario)=>this.usuario = usuario,
  (err:any) => console.log(err));
    

}

    editarusuario():void{
      this.usuariosservice.editarUsuario(this.usuario,this.id).subscribe(
        (data: void)=>{
          console.log(data);
          this.router.navigate(['/listausuario']);    
        },(error:any)=>console.log(error)
      );
      this.usuario = this.usuariosservice.nuevousuario();


      
      // this.asyncMethod();
        }
        async asyncMethod() {
     await this.router.navigate(['/listausuario']);
        }
}
