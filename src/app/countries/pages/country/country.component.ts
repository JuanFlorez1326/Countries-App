import { Component } from '@angular/core';
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

  search() {
    this.error = false;
    this.countryService.searchCountry( this.term )
      .subscribe( 
        (res) => {
          console.log(res);
        }, 
        (err) => {
          this.error = true;
          console.log(err);
        }
      );
  }
}
