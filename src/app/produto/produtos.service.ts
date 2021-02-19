import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Produto } from '../shared/models/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  protected baseURL: string = environment.baseURL;

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  incluirProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.baseURL}/produtos/`, produto)
    .pipe(
      catchError(this.handleError)
    )
  }

  atualizarProduto(id:string, dados: Omit<Produto, "id">):Observable<any> {
    return this.http.put(`${this.baseURL}/produtos/${id}`, dados, {headers: this.httpHeaders})
    .pipe(
      catchError(this.handleError)
    )
  }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.baseURL}/produtos/`);
  }

  obterProdutoPorId(id: string): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseURL}/produtos/${id}`, {headers: this.httpHeaders})
      .pipe(
        map((res:Produto) => {
          return res || {} as Produto
        }),
        catchError(this.handleError)
      );
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
