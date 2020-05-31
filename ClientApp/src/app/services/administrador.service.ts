import { Injectable,Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import {Administrador} from '../models/administrador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string) { }
  
/**POST: add a new Administrador to the server */
addAdm(adm: Administrador): Observable<Administrador>{
  return this.http.post<Administrador>(this.baseUrl+ 'api/Adm', adm, httpOptions).pipe(
    tap((newAdministrador: Administrador)=> this.log(`se agrego un nuevo administrador w/ cedula= ${newAdministrador.id}`)),
    catchError(this.handleError<Administrador>('addAdm'))
  );
}

/** GET Administrador from the server */
getAll():Observable<Administrador[]>{
  return this.http.get<Administrador[]>(this.baseUrl+'api/Adm')
  .pipe(
  tap(_=>this.log('fetched Administrador')),
  catchError(this.handleError<Administrador[]>('getAll',[]))
  );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }


/** Log a HeroService message with the MessageService */
private log(message: string) {
  alert(`AdministradorService: ${message}`);
  }
}
