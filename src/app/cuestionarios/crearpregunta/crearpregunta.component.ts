import { Component, OnInit, OnDestroy } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { UsuariosService } from '../../usuarios/usuarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';

@Component({
  selector: 'app-crearpregunta',
  templateUrl: './crearpregunta.component.html',
  styleUrls: ['./crearpregunta.component.css']
})
export class CrearpreguntaComponent implements OnInit, OnDestroy {
 

  id:number ;
  nombrecuestionario:string;
  pregunta:Pregunta;
  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  usuarioprincipal;
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
    private usuarioservice:UsuariosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = +params.get('id');
      console.log('mi id '+this.id);
      this.lista = 'listapreguntas'+this.id;
    });



    this.cuestionariosservice.suscribir(this.lista);



    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe((usuario)=>{this.cuestionario = usuario
      console.log('mira '+this.cuestionario.terminareditarcuestionario);
      if (this.cuestionario.terminareditarcuestionario === 1)
  {
      this.cuestionariosservice.getPreguntavisible(this.id).subscribe(data =>
        {this.preguntas=data
          this.cuestionariosservice.enviarMensaje(data,this.lista);
        });


            // Esto es un current message---------------------------------------------
            this.cuestionariosservice.currentMessage.subscribe(message =>{
            this.preguntas = message
            });



    this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);
  this.usuarioservice.Logininfo(localStorage.getItem('usuario')).subscribe(data2 =>
    this.usuarioprincipal=data2
   );
  }
  else{console.log('no');
    this.router.navigate(['/listacuestionario']); 
      }

    },(err:any) => console.log(err));
      
 


  }

  eliminarpregunta(id)
  {
this.cuestionariosservice.destruirpregunta(id).subscribe(
  ()=> console.log(`Cuestionario with Id = ${id} deleted`),
      (err) => console.log(err)
);
    
    window.location.reload();
  }

  editarpregunta(id)
  {
    this.router.navigate(['/editarpregunta',id,this.id]); 
  }


  agregarpregunta():void{
    
    this.cuestionariosservice.agregarPregunta(this.pregunta).subscribe(
      (data)=>{
        console.log(data);
        this.asyncMethod();

      },(error:any)=>console.log(error)
    );


     this.pregunta = this.cuestionariosservice.nuevopregunta(this.id);


     //window.location.reload();

     }


     async asyncMethod() {
      this.cuestionariosservice.getPreguntavisible(this.id).subscribe(data =>
        {this.preguntas=data
          this.cuestionariosservice.enviarMensaje(data,this.lista);
        });
// Esto es un current message---------------------------------------------
this.cuestionariosservice.currentMessage.subscribe(message =>{
  this.preguntas = message
  });

         }



     terminareditarquis():void{

      this.cuestionariosservice.terminareditarcues(this.id).subscribe(
        ()=> {console.log(`Cuestionario with Id = ${this.id} deleted`)
        this.router.navigate(['/listacuestionario']); 
      },
            (err) => console.log(err)
      );
     
     }

     ngOnDestroy(): void {
      this.cuestionariosservice.cerrar(1);
    }

}
