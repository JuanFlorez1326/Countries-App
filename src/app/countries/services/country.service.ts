import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private apiUrl: string = 'https://restcountries.com/v3.1/'  

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
  }
}
