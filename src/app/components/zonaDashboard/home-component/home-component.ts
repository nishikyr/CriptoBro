import { Component, inject } from '@angular/core';
import { RestCriptoService } from '../../../services/rest-cripto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  private restCripto = inject(RestCriptoService);

  coins = this.restCripto.getMonedas();

}
