import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent {
  
  constructor(
    private readonly countryService: CountryService
  ) { }

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  search() {
    this.error = false;
    this.countryService.searchCountry( this.term )
      .subscribe( 
        (res) => {
          console.log(res);
          this.countries = res;
        }, 
        (err) => {
          this.error = true;
          this.countries = [];
        }
      );
  }
}
