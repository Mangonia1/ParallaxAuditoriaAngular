import { Component, OnInit } from '@angular/core';
import { CuestionariosService } from '../cuestionarios.service';
import { Cuestionario } from '../cuestionarios.model';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Pregunta } from '../preguntas.model';
import { FormBuilder,FormGroup,Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import * as jsPDF from 'jspdf';
 import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-veresultado',
  templateUrl: './veresultado.component.html',
  styleUrls: ['./veresultado.component.css']
})
export class VeresultadoComponent implements OnInit {

  id:number ;
  id2;
  nombrecuestionario:string;
  pregunta:Pregunta;
  cuestionario:Cuestionario;
  preguntas:Pregunta[];
  arrespuestas:[];
  respuesta;
  lista;

  cuesaudi='';
  cuesnomempresa='';
  cuesnomauditor='';
  cuesnomarea='';
  cuesfecha = '';

  

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


    
    this.cuestionariosservice.getCuestionariouno(this.id).
    subscribe(
      (usuario)=>{this.cuestionario = usuario
      this.cuesaudi = this.cuestionario.nombrecuestionario;
      this.cuesnomempresa = this.cuestionario.empresa;
      this.cuesnomauditor = this.cuestionario.usernameauditor;
      this.cuesnomarea = this.cuestionario.departamento;
       this.cuesfecha = this.cuestionario.updated_at;
      },
  (err:any) => console.log(err));


    this.cuestionariosservice.getpreguntaresultado(localStorage.getItem('miid'),
    localStorage.getItem('username'),this.id).subscribe(data =>
      {this.preguntas=data
      });
  
  


    }

  // generar(): void {
  //   const doc = new jsPDF();

  //   doc.fromHTML(document.getElementById('listainfo'),10,10);
  //   doc.save('reporteee.pdf');
  //   console.log('yeii prro');
  // }

  generar()  
  {
   
    // console.log('mira entrooo');
    var data = document.getElementById('listainfo');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/jpeg')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight)  
      pdf.save('reporte.pdf'); // Generated PDF   
    });   

  }  

}
