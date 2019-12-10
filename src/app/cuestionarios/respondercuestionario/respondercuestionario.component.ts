import { Component, OnInit, OnDestroy } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-respondercuestionario',
  templateUrl: './respondercuestionario.component.html',
  styleUrls: ['./respondercuestionario.component.css']
})
export class RespondercuestionarioComponent implements OnInit, OnDestroy {
 
  myForm:FormGroup;
  id:number ;
  id2;
  nombrecuestionario:string;
  pregunta:Pregunta;
  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  arrespuestas:[];
  respuesta;
  lista;
  
  seleccionarnum: string='';
  numeros: any=['5','4','3','2','1'];

radioChangeHandler (event: any)
{
this.seleccionarnum = event.target.value;
}

  constructor(
    private route:ActivatedRoute,
    private cuestionariosservice:CuestionariosService,
    private router:Router,
    public fb:FormBuilder
    ) { }

  ngOnInit() {
    this.preguntas=[];
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      
      console.log('mi id '+this.id+' mi id2 '+this.id2);
      this.lista = 'listaresponderquis'+this.id;
      this.pregunta = this.cuestionariosservice.nuevopregunta2();
    });

    this.cuestionariosservice.suscribir2(this.lista);


    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe((usuario)=>{this.cuestionario = usuario
      
        if (this.cuestionario.terminareditarcuestionario === 2 && this.cuestionario.terminado === 1)
        {console.log('si');
        this.cuestionariosservice.getPreguntarespondida(this.id).subscribe(data =>
          {this.preguntas=data
            this.cuestionariosservice.enviarMensaje2(data,this.lista);
          });


          // Esto es un current message---------------------------------------------
          this.cuestionariosservice.currentMessage2.subscribe(message =>{
            this.preguntas = message
            });

  
      this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);

        }
        else{console.log('no');
          this.router.navigate(['/listacuestionario']); 
            }


      },(err:any) => console.log(err));

  }


  terminarformu():void
  {
var arrayinput = new Array();
    var inputsValue = document.getElementsByClassName(' datoInput'),
    nameValues = [].map.call(inputsValue, function( dataInput){
arrayinput.push(dataInput.value);
    });

    var arrayinput2 = new Array();
    var inputsValue2 = document.getElementsByClassName(' datoInput2'),
    nameValues2 = [].map.call(inputsValue2, function( dataInput2){
arrayinput2.push(dataInput2.value);
    });
    
for(var j=0; j< arrayinput.length;j++ )
{

  // this.cuestionariosservice.responderpregunta(arrayinput[j],arrayinput2[j]).subscribe(
  //   (data: void)=>{
  //     console.log(data);
      
  //   },(error:any)=>console.log(error));
   console.log('id '+arrayinput2[j]+' respuesta '+arrayinput[j]);
}

this.asyncMethod();

this.pregunta = this.cuestionariosservice.nuevopregunta2();
      

  }

  async asyncMethod() {
    this.cuestionariosservice.getPreguntarespondida(this.id).subscribe(data =>
      {this.preguntas=[]
        this.cuestionariosservice.enviarMensaje2([],this.lista);
      });


      // Esto es un current message---------------------------------------------
      this.cuestionariosservice.currentMessage2.subscribe(message =>{
        this.preguntas = message
        this.router.navigate(['/responderpregunta/',this.id]); 
        });


       
        
       }

  terminarquis():void{
    this.cuestionariosservice.terminarcuestionario(this.id).subscribe(
      ()=>{ console.log(`Cuestionario with Id = ${this.id} deleted`);
      this.router.navigate(['/listacuestionario']); 
    },
          (err) => console.log(err)
    );
    
    
  }

  guardarpregunta(id,respuesta):void{

this.pregunta.respuesta =respuesta;


console.log("pregunta id: "+id+" respuesta: "+this.pregunta.respuesta);


    
      }

      ngOnDestroy(): void {
         this.cuestionariosservice.cerrar2(1);
      }

}
