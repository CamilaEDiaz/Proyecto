import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AdmAddComponent } from './adm-add/adm-add.component';
import { RestAddComponent } from './rest-add/rest-add.component';
import { ManipAddComponent } from './manip-add/manip-add.component';
import { AdmListComponent } from './adm-list/adm-list.component';
import { RestListComponent } from './rest-list/rest-list.component';
import { ManipListComponent } from './manip-list/manip-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AdmAddComponent,
    RestAddComponent,
    ManipAddComponent,
    AdmListComponent,
    RestListComponent,
    ManipListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
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

    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
