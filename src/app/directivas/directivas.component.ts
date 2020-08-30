import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  boton1Pulsado: boolean = false;
  textoInput: string = "";
  mostrarParrafo: boolean = false;
  colorFondo: string = "white";
  serversArray= [];
  serverCounter: number = 0;

  constructor() { }


  ngOnInit(): void {

  }

  pulsarBoton1() {
    this.boton1Pulsado = !this.boton1Pulsado;
  }

  pulsarBoton2() {
    this.serverCounter = this.serverCounter+1;
    this.serversArray.push("Test n"+this.serverCounter);
  }

  cambioEnTexto() {
    if (this.textoInput === "") {
      this.mostrarParrafo = false;
      this.colorFondo = "white";
    } else {
      this.mostrarParrafo = true;
      this.colorFondo = "green";

    }
    console.log("Pasada " + this.mostrarParrafo)
  }

  getColorFondo() {
    if (this.mostrarParrafo) {
      return "green";
    } else {
      return "white"
    }
  }

  getClase() {
    if (this.mostrarParrafo) {
      return "clase1";
    } else {
      return "clase2"
    }
  }

}
