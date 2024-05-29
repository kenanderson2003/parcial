import { Component } from '@angular/core';
import { Servicio } from 'src/app/entities/servicio';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  
  listaServicios:Servicio[] | undefined;

  constructor(private servicioservice: ServicioService){}

  ngOnInit():void{
    this.servicioservice.servicioSelect().subscribe(
      (res) => {
        console.log(res);
        this.listaServicios = JSON.parse(JSON.stringify(res))
      }
    )
  }
}
