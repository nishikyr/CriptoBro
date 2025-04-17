import { inject, Injectable, Injector, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import IRestMessage from '../models/IRestMessage';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/Coin';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestCriptoService {

  private API_URL = 'http://localhost:3000/api';
  private _httpClient = inject(HttpClient);
  private _injector = inject(Injector);

  //Empezamos a usar señales aqui, por defecto lo buscaremos por dolares
  private currency = signal<string>('usd');
  private paginacion = signal<number>(50);

  constructor() {

  }

  public getMonedas(): Signal<Coin[]>{
    return toSignal(
      this._httpClient
          .get<Coin[]>(
            `${this.API_URL}/coins/markets?vs_currency=${this.currency()}&per_page=${this.paginacion()}`
          ).pipe(
            map(data => {
              return data || [];
            })
          ),
          { initialValue: [], injector: this._injector }
    );
  }
}
