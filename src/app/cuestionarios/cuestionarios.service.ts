import { Injectable } from '@angular/core';
import { Cuestionario } from './cuestionarios.model';
import { Pregunta } from './preguntas.model';
import { Empresa } from './empresa.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import Ws from '@adonisjs/websocket-client';
//Se Define la direccion del socket
//no funciona con esta linea de ws
 const ws = Ws('ws://192.168.1.82:3333');

@Injectable({
  providedIn: 'root'
})
export class CuestionariosService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  private socket;

  private messageSource2 = new BehaviorSubject([]);
  currentMessage2 = this.messageSource.asObservable();
  private socket2;


  constructor(private httpclient:HttpClient) {
      //Se conecta
      ws.connect();
   }


  private vari1:string = "http://192.168.1.82:3333/cuestionario/eliminar";
  private vari11:string = "http://192.168.1.82:3333/empresa/eliminar";
  private vari2:string = "http://192.168.1.82:3333/cuestionario/veruno";
  private vari22:string = "http://192.168.1.82:3333/empresa/veruno";
  private vari222:string = "http://192.168.1.82:3333/pregunta/veruno";
  private vari3:string = "http://192.168.1.82:3333/cuestionario/editar";
  private vari33:string = "http://192.168.1.82:3333/empresa/editar";
  private vari333:string = "http://192.168.1.82:3333/pregunta/editar";

  private vari4:string = "http://192.168.1.82:3333/pregunta/eliminar";

  private vari44:string = "http://192.168.1.82:3333/cuestionario/terminarcuestionario";
  private vari444:string = "http://192.168.1.82:3333/cuestionario/terminareditar";
  private vari5:string = "http://192.168.1.82:3333/pregunta/ver/visible";
  private vari6:string = "http://192.168.1.82:3333/pregunta/ver/norespondida";
  private vari66:string = "http://192.168.1.82:3333/pregunta/ver/nocalificada";
  private vari666:string = "http://192.168.1.82:3333/pregunta/veresultado";
  private vari7:string = "http://192.168.1.82:3333/pregunta/responder";
  private vari77:string = "http://192.168.1.82:3333/pregunta/calificar";
  private url3:string = "http://192.168.1.82:3333/cuestionario/ver";





  suscribir(idchannel)
  {
   // -----------------------------------------
    this.socket = ws.subscribe('usuario:'+idchannel);

  //Evento que sucede al completar la conexion
  this.socket.on('ready', () => {
    //Emite el mensaje hacia el servidor del socket
     // socket.emit("message","esta dentro")
  })
  //Escuchador que espera mensajes desde el servidor
  this.socket.on('message', (event) => {
    //console.log(event);
    this.changeMessage(event);
  })
  this.socket.on('error', (error) => {
    console.log(error)
  })
  this.socket.on('close', () => {
  })
  }

  suscribir2(idchannel)
  {
   // -----------------------------------------
    this.socket2 = ws.subscribe('usuario:'+idchannel);

  //Evento que sucede al completar la conexion
  this.socket2.on('ready', () => {
    //Emite el mensaje hacia el servidor del socket
     // socket.emit("message","esta dentro")
  })
  //Escuchador que espera mensajes desde el servidor
  this.socket2.on('message', (event) => {
    //console.log(event);
    this.changeMessage2(event);
  })
  this.socket2.on('error', (error) => {
    console.log(error)
  })
  this.socket2.on('close', () => {
  })
  }

  enviarMensaje(datos,idchannel){
    // -----------------------------------------
       ws.getSubscription('usuario:'+idchannel).emit('message',datos);
 }

 enviarMensaje2(datos,idchannel){
  // -----------------------------------------
     ws.getSubscription('usuario:'+idchannel).emit('message',datos);
}

 changeMessage(msg) {
  this.messageSource.next(msg);
}

changeMessage2(msg) {
  this.messageSource2.next(msg);
}

  agregarEmpresa(empresa) {
    return this.httpclient.post("http://192.168.1.82:3333/empresa/guardar",empresa,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      getEmpresa(): Observable<Empresa[]>
      {
        return this.httpclient.get<Empresa[]>("http://192.168.1.82:3333/empresa/ver");
      }

      getEmpresauno(id): Observable<Empresa>
      {
         
        return this.httpclient.get<Empresa>(`${this.vari22}/${id}`);
      }

      destruirEmpresa(id): Observable<void>
      {
        return this.httpclient.put<void>(`${this.vari11}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }

      editarEmpresa(empresa: Empresa,id:number):Observable<void> {

        return this.httpclient.put<void>(`${this.vari33}/${id}`,empresa,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
          }

          nuevoempresa():Empresa{
            return{
              id:0,
              nombre:'',
              giro:'',
              visible:''
            };
          }



    
  agregarCuestionario(cuestionario) {
    return this.httpclient.post("http://192.168.1.82:3333/cuestionario/guardar",cuestionario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      getCuestionarioadmin(): Observable<Cuestionario[]>
      {
        return this.httpclient.get<Cuestionario[]>("http://192.168.1.82:3333/cuestionario/veradmin");
      }

      getCuestionario(id, username): Observable<Cuestionario[]>
      {
        var datos2={myid:id,username:username};
      return this.httpclient.post<Cuestionario[]>(this.url3,datos2);  
      }




      destruirCuestionario(id): Observable<void>
      {
        return this.httpclient.put<void>(`${this.vari1}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }

      editarCuestionario(cuestionario: Cuestionario,id:number):Observable<void> {

        return this.httpclient.put<void>(`${this.vari3}/${id}`,cuestionario,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
          }

          getCuestionariouno(id): Observable<Cuestionario>
              {
                 
                return this.httpclient.get<Cuestionario>(`${this.vari2}/${id}`);
              }

          nuevocuestionario(idcreador):Cuestionario{
            return{
              id:0,
              nombrecuestionario:'',
              idcreador:idcreador,
              usernameauditor:'',
              empresa: '',
              departamento:'',
              terminado:0,
              terminareditarcuestionario:0,
              visible:'',
              updated_at:''
            };
          }
          nuevocuestionarioedit():Cuestionario{
            return{
              id:0,
              nombrecuestionario:'',
              idcreador:0,
              usernameauditor:'',
              empresa: '',
              departamento:'',
              terminado:0,
              terminareditarcuestionario:0,
              visible:'',
              updated_at:''
            };
          }

          agregarPregunta(pregunta) {
            return this.httpclient.post("http://192.168.1.82:3333/pregunta/guardar",pregunta,
              {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json'
                })
              });
              }

              terminarcuestionario(id): Observable<void>
              {
        return this.httpclient.put<void>(`${this.vari44}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }
              
              terminareditarcues(id): Observable<void>
              {
        return this.httpclient.put<void>(`${this.vari444}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }

          responderpregunta(respuesta,id:number):Observable<void> {
            var datos2={respuesta:respuesta};
                return this.httpclient.put<void>(`${this.vari7}/${id}`,datos2,
                  {
                    headers: new HttpHeaders({
                      'Content-Type': 'application/json'
                    })
                  });
                  }

          calificarpregunta(pregunta: Pregunta,id:number):Observable<void> {

                    return this.httpclient.put<void>(`${this.vari77}/${id}`,pregunta,
                      {
                        headers: new HttpHeaders({
                          'Content-Type': 'application/json'
                        })
                      });
                      }



              getPreguntavisible(id): Observable<Pregunta[]>
              {
                 
                return this.httpclient.get<Pregunta[]>(`${this.vari5}/${id}`);
              }

              getPreguntarespondida(id): Observable<Pregunta[]>
              {
                 
                return this.httpclient.get<Pregunta[]>(`${this.vari6}/${id}`);
              }

              getpreguntaresultado(id, username,idcuesti): Observable<Pregunta[]>
              {
              var datos2={myid:id,username:username};
              return this.httpclient.post<Pregunta[]>(`${this.vari666}/${idcuesti}`,datos2);  
              }

              getPreguntanocalificda(id): Observable<Pregunta[]>
              {
                 
                return this.httpclient.get<Pregunta[]>(`${this.vari66}/${id}`);
              }

              getPreguntauno(id): Observable<Pregunta>
              {
                 
                return this.httpclient.get<Pregunta>(`${this.vari222}/${id}`);
              }
              

              destruirpregunta(id): Observable<void>
                        {
        return this.httpclient.put<void>(`${this.vari4}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }

      editarPregunta(pregunta: Pregunta,id:number):Observable<void> {

        return this.httpclient.put<void>(`${this.vari333}/${id}`,pregunta,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
          }

          nuevopregunta(idqui):Pregunta{
            return{
              id:0,
              idcuestionario:idqui,
              preguntatxt:'',
              respuesta:'',
              respondido:'',
              calificar:'',
              tiporespuesta:'',
              visible:''
            };
          }

          nuevopregunta2():Pregunta{
            return{
              id:0,
              idcuestionario:0,
              preguntatxt:'',
              respuesta:'',
              respondido:'',
              calificar:'',
              tiporespuesta:'',
              visible:''
            };
          }


          
          cerrar(id)
          {
            //  socket = ws.subscribe('chat');
            this.socket.close();
            // this.socket2.close();
            console.log('se cerro');
          }
          cerrar2(id)
          {
            //  socket = ws.subscribe('chat');
            this.socket2.close();
            // this.socket2.close();
            console.log('se cerro');
          }

}
