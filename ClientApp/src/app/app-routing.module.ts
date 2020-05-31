import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdmListComponent} from './adm-list/adm-list.component';
import {AdmAddComponent} from './adm-add/adm-add.component';
import {RestAddComponent} from './rest-add/rest-add.component';
import {RestListComponent} from './rest-list/rest-list.component';
import {ManipAddComponent} from './manip-add/manip-add.component';
import {ManipListComponent} from './manip-list/manip-list.component';
import{Routes, RouterModule} from '@angular/router';

const routes: Routes=[
  {
    path:'admadd',
    component: AdmAddComponent,
  },
  
  {
    path:'restadd',
    component: RestAddComponent,
  },

  {
    path:'restlist',
    component: RestListComponent,
  },

  {
    path:'manipadd',
    component: ManipAddComponent,
  },
  {
    path:'maniplist',
    component: ManipListComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

