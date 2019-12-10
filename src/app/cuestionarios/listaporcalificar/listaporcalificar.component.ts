import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listaporcalificar',
  templateUrl: './listaporcalificar.component.html',
  styleUrls: ['./listaporcalificar.component.css']
})
export class ListaporcalificarComponent implements OnInit {

  id:number ;
  nombrecuestionario:string;
  pregunta:Pregunta;
  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  
  myForm:FormGroup;
  respuesta;
  calificar;

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private router:Router,
    public fb:FormBuilder
  ) { }

  ngOnInit() {


    this.myForm=this.fb.group({
      calificar:['',Validators.required]
    });


    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);

      this.pregunta = this.cuestionariosservice.nuevopregunta2();

    });


      this.cuestionariosservice.getPreguntanocalificda(this.id).subscribe(data =>
        this.preguntas=data);

    this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);


    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe(
      (usuario)=>this.cuestionario = usuario,
  (err:any) => console.log(err));

  }


  guardarpregunta(id,calificar):void{

    this.pregunta.calificar =calificar;
    
    
    console.log("pregunta id: "+id+" respuesta: "+this.pregunta.calificar);
    
    
        this.cuestionariosservice.calificarpregunta(this.pregunta,id).subscribe(
          (data: void)=>{
            console.log(data);
          },(error:any)=>console.log(error)
        );
         this.pregunta = this.cuestionariosservice.nuevopregunta2();
         window.location.reload();
          }


}
