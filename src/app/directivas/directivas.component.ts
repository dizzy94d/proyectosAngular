import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html'
})
export class DirectivasComponent implements OnInit {

  boton1Pulsado: boolean = false;
  textoInput:string = "";
  mostrarParrafo:boolean=false;

  constructor() { }


  ngOnInit(): void {
    
  }

  pulsarBoton1(){
    this.boton1Pulsado = !this.boton1Pulsado;
  }

  cambioEnTexto(){
    if(this.textoInput ===""){
      this.mostrarParrafo=false;
    }else{
      this.mostrarParrafo=true;
    }
    console.log("Pasada "+this.mostrarParrafo)
  }

}
