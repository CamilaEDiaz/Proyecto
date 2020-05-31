import { Component, OnInit } from '@angular/core';
import {Manipulador} from '../models/manipulador';
import {ManipuladorService} from '../services/manipulador.service';
@Component({
  selector: 'app-manip-add',
  templateUrl: './manip-add.component.html',
  styleUrls: ['./manip-add.component.css']
})
export class ManipAddComponent implements OnInit {

  constructor(private manipuladorService: ManipuladorService) { }
  manipulador: Manipulador;

  ngOnInit(): void {
    this.manipulador= {cedula: 0, nombre:'', telefono: '', correo:'', };
  }
  addM() {
    this.manipuladorService.addManip(this.manipulador)
    .subscribe(manipulador=> {
    alert('Se agrego un nuevo manipulador')
    });
    }

}
