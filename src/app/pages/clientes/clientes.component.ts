import { Component } from '@angular/core';
import { Cliente } from 'src/app/entities/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  listaClientes:Cliente[] = [];
  clientesFilter: any ={empresa:''};
  p:number=1;
  order: string = 'empresa'
  reversa:boolean = false;

  constructor(private clientesservice: ClientesService){}

  ngOnInit():void{
    this.clientesservice.clientesSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaClientes = JSON.parse(JSON.stringify(res))
      }
    )
  }
  setOrder(nombreColumna: string){
    if(this.order === nombreColumna){
      this.reversa = !this.reversa
    }
    else{
      this.reversa=false
    }
    this.order = nombreColumna;
  }

}
