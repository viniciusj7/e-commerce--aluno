import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { produtoService } from '../../../core/services/produtos.service';
import { Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { CarrinhoService } from '../../../core/services/carrinho.service';
@Component({
  selector: 'app-list-produtos',
  imports: [Produto,UpperCasePipe,PrecoFormatadoPipe, MatButtonModule, MatCardModule],
  templateUrl: './list-produtos.html',
  styleUrl: './list-produtos.css',
})
export class ListProdutos {
  //! remover a lista de produtos, dados carregados via API Fakestoreapi
  produtos = signal <
  {nome: string ; preco: number } []> ([]);
//? criar estado de carregamento
// ** true: requisição em andamento, exibir dados no template
//! false: esconder indicador e exibir a lista de produtos 
  carregando = signal(true);
  //! cria método para a requisição dos produtos 
  carregarProdutos(){
    this.carregando.set(true); //

    this.erro.set (null); //limpa o erro anterio

    this.produtoService.buscarProduto().subscribe({
      next: (dados) => {
        const produtos = this.produtoService.transformarProdutos(dados);
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
      error: (erro) => {
        console.error ('Erro ao carregar os Produtos:', erro);
        this.erro.set('Erro ao carregar Produto. Verifique sua conexão e tente novamente!');
        this.carregando.set(false);
      },
    });
}
  

exibirProduto(nome:string){
  //console.log('Produto selecionado: ', nome);
  this.produtoSelecionado.set(nome);
}
 adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual,
     {nome:'Processador Core i5 14550FS', preco:2500},

  ]);

 }
totalProdutos = computed(() => this.produtos().length);

valorTotal = computed(() => { return this.produtos().reduce((total, item) => total + item.preco,0)});

substituirProdutos(){
  this.produtos.set([
    {nome:'Teclado', preco:40},
    {nome:'Mouse', preco:10},
    {nome:'Monitor', preco:100},
    {nome:'Desktop', preco:500},
    {nome:'Headset', preco:25}
  ]);
}
//! injetar httpCliente dentro de construct, reestruturar construct !!!
 constructor(){
  //!Carregar a API
  this.carregarProdutos();
  

  //! efects continuam iguais
  effect(() =>{
    console.log('Lista de produtos alterados: ', this.produtos());
  });
  effect(() =>{
     console.log('Valor total atualizado: ', this.valorTotal());
  });
  effect(() => {
    if (typeof document!== 'undefined') {
        document.title = `(${this.totalProdutos()}) Minha Loja`;
}
  });
 }
 produtoSelecionado = signal <string | null> (null);


 erro = signal <string | null> (null);

 adicionarAoCarrinho(produto: {nome: string; preco: number}){
  this.carrinhoService.adicionar(produto);
 }



  private produtoService =  inject (produtoService);
  public carrinhoService = inject (CarrinhoService);

  quantidadeCarrinho = this.carrinhoService.quantidadeItens;
  totalCarrinho = this.carrinhoService.totalItens;





}
 
// totalCarrinho = computed(() => { 
// return this.carrinho().reduce((total, item) =>
//  total + item.preco,0);
// });