import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-info-produto',
  templateUrl: './info-produto.component.html',
  styleUrls: ['./info-produto.component.css'],
})
export class InfoProdutoComponent implements OnInit {
  produto: Produto;
  id: string;

  constructor(
    private produtoService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.produtoService.obterProdutoPorId(this.id).subscribe(res => {
      this.produto =  res;
      console.log(res);
    })
  }

  ngOnInit(): void {}
}
