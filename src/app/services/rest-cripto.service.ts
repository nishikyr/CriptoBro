import { inject, Injectable, Injector, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import IRestMessage from '../models/IRestMessage';
import { HttpClient } from '@angular/common/http';
import { Coin } from '../models/Coin';
import { map } from 'rxjs';
import { CoinDetails } from '../models/CoinDetails';

@Injectable({
  providedIn: 'root'
})
export class RestCriptoService {

  private API_URL = 'http://localhost:3003/api/zonaDashboard';
  private _httpClient = inject(HttpClient);
  private _injector = inject(Injector);

  //Empezamos a usar señales aqui, por defecto lo buscaremos por dolares
  private currency = signal<string>('usd');
  private paginacion = signal<number>(50);

  constructor() {

  }

  //---------------------------- AQUI OBTENEMOS EL LISTADO DE CRIPTOMONEDAS -------------------------
  public getMonedas(): Signal<Coin[]>{
    return toSignal(
      this._httpClient
          .get<IRestMessage>(
            `${this.API_URL}/getCriptomonedas?vs_currency=${this.currency()}&per_page=${this.paginacion()}`
          ).pipe(
            map(response => {
              return response.datos ?? []
            })
          ),
          { initialValue: [], injector: this._injector }
    );
  }
  //-------------------------- AQUI OBTENEMOS UNA CRIPTOMONEDA POR ID --------------------------------
  public getMonedaPorId(id: string): Signal<CoinDetails> {
    return toSignal(
      this._httpClient
      .get<IRestMessage>(`${this.API_URL}/getCriptomoneda?id=${id}`)
      .pipe(
        map(response => {
          return response.datos ?? null
        })
      ),
      { initialValue: null, injector: this._injector }
    );
  }
}
