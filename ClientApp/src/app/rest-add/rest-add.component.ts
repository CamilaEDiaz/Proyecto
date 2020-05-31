import { Component, OnInit } from '@angular/core';
import {Restaurante} from '../models/restaurante';
import {RestauranteService} from '../services/restaurante.service';
@Component({
  selector: 'app-rest-add',
  templateUrl: './rest-add.component.html',
  styleUrls: ['./rest-add.component.css']
})
export class RestAddComponent implements OnInit {

  constructor(private restauranteService: RestauranteService) { }
  restaurante: Restaurante;

  ngOnInit(): void {
    this.restaurante={ id: 0, nit: 0, nombreRestaurante: '', telefono:0, descripcion:'', correo:'', direccion:''}
  }
  add() {
    this.restauranteService.addRest(this.restaurante)
    .subscribe(restaurante => {
    alert('Se agrego un nuevo administrador')
    });
    }

}
