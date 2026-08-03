import { Component,Input,Output, EventEmitter } from '@angular/core'; 

import { UpperCasePipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
// import { ListProdutos } from '../list-produtos/list-produtos';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  //Entrada de dados de list-produtos
  @Input() nome: string = '';
  @Input() preco: number = 0;
  //Saida de dados de produtos selecionados pra list-produtos 
  @Output() produtoSelecionado = new EventEmitter<string>();
  @Output() produtoAdiconado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();
  

adicionaAoCarrinho(){
  this.produtoAdiconado.emit({nome: this.nome,preco: this.preco});
}


  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }
}
