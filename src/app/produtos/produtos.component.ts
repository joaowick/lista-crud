import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/model/produto';
import { ApiService } from '../service/api.service'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  displayColumns: string[] = ['nome', 'desc', 'preco', 'acao'];
  dataSource: Produto[];
  isLoadingResults: boolean;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getProdutos()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
