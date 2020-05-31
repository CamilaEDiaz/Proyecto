import { Injectable,Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError , map, tap } from 'rxjs/operators';
import {Restaurante} from '../models/restaurante';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

constructor(private http:HttpClient, @Inject('BASE_URL')private baseUrl:string) { }
  
/**POST: add a new Restaurante to the server */
addRest(rest: Restaurante): Observable<Restaurante>{
  return this.http.post<Restaurante>(this.baseUrl+ 'api/Rest', rest, httpOptions).pipe(
    tap((newRestaurante: Restaurante)=> this.log(`se agrego un nuevo restaurante w/ nit= ${newRestaurante.nit}`)),
    catchError(this.handleError<Restaurante>('addRest'))
  );
}

/** GET Restairante from the server */
getAll():Observable<Restaurante[]>{
  return this.http.get<Restaurante[]>(this.baseUrl+'api/Rest')
  .pipe(
  tap(_=>this.log('fetched Restaurante')),
  catchError(this.handleError<Restaurante[]>('getAll',[]))
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
  alert(`RestauranteService: ${message}`);
  }
}
