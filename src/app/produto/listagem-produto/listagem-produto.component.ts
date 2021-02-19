import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {
  public produtos: Produto[];

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.listarProdutos()
    .subscribe(
      (result)=>{
        this.produtos = result;
        console.log(result);
      },
      error=> console.log(error)
    );
  }

}
