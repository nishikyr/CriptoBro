import { Component, inject } from '@angular/core';
import { RestCriptoService } from '../../../services/rest-cripto.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  private restCripto = inject(RestCriptoService);

  coins = this.restCripto.getMonedas();

}
