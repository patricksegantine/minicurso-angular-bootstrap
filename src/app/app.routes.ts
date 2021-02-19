import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './feature/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const rootRouterConfig: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'institucional',
    children: [
      { path: 'contato', component: ContatoComponent },
      { path: 'sobre', component: SobreComponent },
    ]
  },
  { path: 'produtos', loadChildren: () => import('./produto/produtos.module').then(m=>m.ProdutosModule) },
  { path: 'features', component: DataBindingComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];
