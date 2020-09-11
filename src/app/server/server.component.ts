import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  /*SINTAXIS Pe DECLARAR VARIABLES
   *forma 1
     -{nombre}: {tipo} = {valor};
   *forma 2
     -{nombre}: = {valor};

 */

  nuevoServer: string = "none";
  serverId: number = 10;
  serverStatus: string = 'FUNCIONANDO';
  serverResume: string;
  counter: number = 1;


  ngOnInit(): void {
    /*llamada a un metodo
      embeber un metodo
      *forma1
      ()=> {lógica en una sola línea}   
    
    */
    setTimeout(() => this.nuevoServer = "block", 3000);
  }

  boton1click() {
    this.serverStatus = "Cagaste";
    this.counter = this.counter+1;
    this.serverResume = 'cagaste potencia' + this.counter;
  }


}  
