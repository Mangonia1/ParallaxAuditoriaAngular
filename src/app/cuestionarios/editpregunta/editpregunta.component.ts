import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';

@Component({
  selector: 'app-editpregunta',
  templateUrl: './editpregunta.component.html',
  styleUrls: ['./editpregunta.component.css']
})
export class EditpreguntaComponent implements OnInit {

  pregunta:Pregunta;
  
  id:number ;
  id2:number ;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private usuarioservice:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      this.id2 = +params.get('id2');
      console.log('mi id '+this.id);
    });

    this.pregunta = this.cuestionariosservice.nuevopregunta2();

    this.cuestionariosservice.getPreguntauno(this.id).
    subscribe(
      (usuario)=>this.pregunta = usuario,
  (err:any) => console.log(err));
    

  }


  editarpregunta(id):void{
    this.cuestionariosservice.editarPregunta(this.pregunta,this.id).subscribe(
      (data: void)=>{
        console.log(data);
        this.router.navigate(['/agregarpregunta',id]);
      },(error:any)=>console.log(error)
    );
    this.pregunta = this.cuestionariosservice.nuevopregunta2();
    
    
    
      }

  }


