import { Injectable,Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import {Manipulador} from '../models/manipulador';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class ManipuladorService {

constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string) { }
  
/**POST: add a new Administrador to the server */
addManip(manip: Manipulador): Observable<Manipulador>{
  return this.http.post<Manipulador>(this.baseUrl+ 'api/Manip', manip, httpOptions).pipe(
    tap((newManipulador: Manipulador)=> this.log(`se agrego un nuevo manipulador w/ cedula= ${newManipulador.cedula}`)),
    catchError(this.handleError<Manipulador>('addManip'))
  );
}

/** GET Administrador from the server */
getAll():Observable<Manipulador[]>{
  return this.http.get<Manipulador[]>(this.baseUrl+'api/Manip')
  .pipe(
  tap(_=>this.log('fetched Manipulador')),
  catchError(this.handleError<Manipulador[]>('getAll',[]))
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
  alert(`MaipuladorService: ${message}`);
  }
}
