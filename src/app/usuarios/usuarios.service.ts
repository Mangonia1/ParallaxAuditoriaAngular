import { Injectable } from '@angular/core';
import { Usuario } from './usuarios.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import Ws from '@adonisjs/websocket-client';
//Se Define la direccion del socket
//no funciona con esta linea de ws
 const ws = Ws('ws://127.0.0.1:3333');

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();
  private socket;


  private messageSource2 = new BehaviorSubject([]);
  currentMessage2 = this.messageSource.asObservable();
  private socket2;


  private URL:string="http://127.0.0.1:3333"
 // private vari1:string = "http://127.0.0.1/usuario/eliminar";
  //private vari2:string = "http://127.0.0.1/usuario/veruno";
 // private vari3:string = "http://127.0.0.1/usuario/editar";

 // private url:string = "http://127.0.0.1/";
 //private url2:string = "http://127.0.0.1/verusua";
 // private url3:string = "http://127.0.0.1/usuarioespecial";

  constructor(private httpclient:HttpClient) {
    //Se conecta
    ws.connect();
   }

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
     this.changeMessage(event);
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




  Login(email:string, password:string){
    var datos={email:email, password:password}
  return this.httpclient.post(this.URL+"/login/",datos);  
  }

  Logininfo(email:string): Observable<Usuario>
      {
        var datos2={email:email};
      return this.httpclient.post<Usuario>(this.URL+"/verusua/",datos2);  
      }

      usuarioespecial(email:string): Observable<Usuario>
      {
        var datos2={email:email};
      return this.httpclient.post<Usuario>(this.URL+"/usuarioespecial/",datos2);  
      }


  agregarUsuario(usuario) {
    return this.httpclient.post(this.URL+"/usuario/guardar/",usuario,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
      }

      getusuario(): Observable<Usuario[]>
      {
        return this.httpclient.get<Usuario[]>(this.URL+"/usuario/ver/");
      }

      getusuariosinempresa(): Observable<Usuario[]>
      {
        return this.httpclient.get<Usuario[]>(this.URL+"/usuario/versinempresa/");
      }

      destruirUsuario(id): Observable<void>
      {
        return this.httpclient.put<void>(`${this.URL+"/usuario/eliminar"}/${id}`,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
      }

      editarUsuario(usuario: Usuario,id:number):Observable<void> {

        return this.httpclient.put<void>(`${this.URL+"/usuario/editar"}/${id}`,usuario,
          {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          });
          }

          getusuariouno(id): Observable<Usuario>
              {
                 
                return this.httpclient.get<Usuario>(`${this.URL+"/usuario/veruno"}/${id}`);
              }

          nuevousuario():Usuario{
            return{
              id:0,
              nombre:'',
              apellidop:'',
              apellidom:'',
              tipo:'',
              username:'',
              email:'',
              idempresa:0,
              password:''
            };
          }



          cerrar(id)
          {
            //  socket = ws.subscribe('chat');
            this.socket.close();
            // this.socket2.close();
            console.log('se cerro');
          }
    



}
