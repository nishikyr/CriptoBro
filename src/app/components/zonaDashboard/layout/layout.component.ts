import { Component } from '@angular/core';
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";

@Component({
  selector: 'app-layout',
  imports: [FooterComponentComponent, RouterOutlet, HeaderComponentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
