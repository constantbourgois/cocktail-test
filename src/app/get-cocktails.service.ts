import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Cocktail } from './cocktail';


@Injectable({
  providedIn: 'root'
})

export class GetCocktailsService {
  private http = inject(HttpClient);
  //private url = 'https://cors-anywhere.herokuapp.com/http://www.thecocktaildb.com/api/json/v1/1/random.php';
  private url = 'http://www.thecocktaildb.com/api/json/v1/1/random.php';

  getCocktail(): Observable<any> {
    return this.http.get(this.url)
  }

}
