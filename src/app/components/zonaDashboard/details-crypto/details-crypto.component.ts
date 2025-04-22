import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestCriptoService } from '../../../services/rest-cripto.service';
import { CoinDetails } from '../../../models/CoinDetails';
import { Coin } from '../../../models/Coin';

@Component({
  selector: 'app-details-crypto',
  imports: [RouterLink],
  templateUrl: './details-crypto.component.html',
  styleUrl: './details-crypto.component.css'
})
export class DetailsCryptoComponent {
  private route = inject(ActivatedRoute);
  private criptoService = inject(RestCriptoService);

  // ✅ Obtenemos el parámetro 'id' como signal reactiva
  id: string = this.route.snapshot.paramMap.get('id')!;

  // ✅ Usamos computed para obtener el coin como signal
  coin: Signal<CoinDetails | null> = this.criptoService.getMonedaPorId(this.id);



}
