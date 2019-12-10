import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Empresa } from '../empresa.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-empresaedit',
  templateUrl: './empresaedit.component.html',
  styleUrls: ['./empresaedit.component.css']
})
export class EmpresaeditComponent implements OnInit {

  empresa:Empresa;
  myForm:FormGroup;
  id:number ; 

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router,
    public fb:FormBuilder
  ) { }

  ngOnInit() {
    this.empresa = this.cuestionariosservice.nuevoempresa();

    this.myForm=this.fb.group({
      nombre:['',Validators.required],
      giro:['',Validators.required]
    });
    
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
    
    });

    this.cuestionariosservice.getEmpresauno(this.id).
    subscribe(
      (usuario)=>this.empresa = usuario,
  (err:any) => console.log(err));

  }

  


  agregarempresa():void{

    this.cuestionariosservice.editarEmpresa(this.empresa,this.id).subscribe(
      (data: void)=>{
        console.log(data);
        this.router.navigate(['/listaempresa'])
      },(error:any)=>console.log(error)
    );
    this.empresa = this.cuestionariosservice.nuevoempresa();
    
    
    

     }

}
