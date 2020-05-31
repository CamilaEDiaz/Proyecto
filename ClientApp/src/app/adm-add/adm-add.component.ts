import { Component, OnInit } from '@angular/core';
import {Administrador} from '../models/administrador';
import {AdministradorService} from '../services/administrador.service';
@Component({
  selector: 'app-adm-add',
  templateUrl: './adm-add.component.html',
  styleUrls: ['./adm-add.component.css']
})
export class AdmAddComponent implements OnInit {

  constructor(private administradorService: AdministradorService) { }
  administrador: Administrador;

  ngOnInit(): void {
    this.administrador= {id:0, usuario:'', contrasena:''};
  }
  add() {
    this.administradorService.addAdm(this.administrador)
    .subscribe(administrador => {
    alert('Se agrego un nuevo administrador')
    });
    }

}
