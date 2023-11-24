import { Injectable, inject } from '@angular/core';
import { CountriesService } from '../countries/countries.service';
import { Country } from '../../models/country.model';
import { signalStore, withState } from '@ngrx/signals';
import { HttpErrorResponse } from '@angular/common/http';

type State = {
  countries: Country[],
  loading: boolean;
  loaded: boolean;
  error: HttpErrorResponse | null
}

@Injectable({
  providedIn: 'root'
})
export class CountriesStoreService extends signalStore(
  withState<State>({
    countries: [],
    loading: false,
    loaded: false,
    error: null
  }),
) {

  // #countriesService = inject(CountriesService);

 
}
