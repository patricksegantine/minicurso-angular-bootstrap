import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProdutoComponent } from './info-produto/info-produto.component';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { ProdutosRoutingModule } from './produtos.routes';

@NgModule({
  declarations: [InfoProdutoComponent, ListagemProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
})
export class ProdutosModule {}
