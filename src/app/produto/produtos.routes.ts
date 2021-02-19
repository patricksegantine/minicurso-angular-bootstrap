import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoProdutoComponent } from './info-produto/info-produto.component';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';

const routes: Routes = [
  { path: '', component: ListagemProdutoComponent },
  { path: ':nome/:id', component: InfoProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
