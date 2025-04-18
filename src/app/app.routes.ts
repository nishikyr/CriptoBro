import { Routes } from '@angular/router';
import { LayoutComponent } from './components/zonaDashboard/layout/layout.component';
import { HomeComponent} from './components/zonaDashboard/home-component/home-component';

export const routes: Routes = [
  //--- Esto me previene de que si alguien escribe mal la ruta, se ha redireccionado al Home ---
  { path:'', redirectTo: '/Dashboard/Home', pathMatch: 'full'},
  {
    path: 'Dashboard',
    component: LayoutComponent,
    children:[
      {path: 'Home', component: HomeComponent}
    ]
  }
];
