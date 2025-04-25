import { Routes } from '@angular/router';
import { LayoutComponent } from './components/zonaDashboard/layout/layout.component';
import { HomeComponent} from './components/zonaDashboard/home-component/home-component';
import { RegistroComponent } from './components/zonaCliente/registroComponent/registro.component';
import { Verificacion2FAComponent } from './components/zonaCliente/verificacion2FAComponent/verificacion2-fa.component';
import { DetailsCryptoComponent } from './components/zonaDashboard/details-crypto/details-crypto.component';
import { LoginComponent } from './components/zonaCliente/loginComponent/login.component';

export const routes: Routes = [
  //--- Esto me previene de que si alguien escribe mal la ruta, se ha redireccionado al Home, pero una mejor práctica sería una página de error o url desconocido y redireccionarlo al home ---
  { path:'', redirectTo: '/Dashboard/Home', pathMatch: 'full'},
  {
    path: 'Dashboard',
    component: LayoutComponent,
    children:[
      {path: 'Home', component: HomeComponent},
      {path: 'crypto/:id', component: DetailsCryptoComponent}
    ]
  },
  {
    path: 'Cliente',
    children:[
      {path: 'Registro', component: RegistroComponent},
      {path: 'Login', component: LoginComponent},
      {path: 'Verificar/:operacion', component: Verificacion2FAComponent},
    ]
  }
];
