import { Component } from '@angular/core';
import { Proveedor } from 'src/app/entities/proveedor';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {

  mensaje = "Solo se que nada sé";
  listaProveedores: Proveedor[] = [];
  proveedoresFilter: any = { nombreempresa:''};
  p:number=1;
  order: string = 'nombreempresa'
  reversa:boolean = false;


  constructor(private proveedoresService: ProveedoresService){}

  ngOnInit(): void{
    this.proveedoresService.proveedoresSelect().subscribe(
      (res) =>{
        console.log(res);
        this.listaProveedores = JSON.parse(JSON.stringify(res))
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
