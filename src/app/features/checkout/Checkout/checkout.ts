import { Component, inject } from '@angular/core';
import { Inject } from '@angular/core';
import { ReactiveFormsModule } from'@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  carrinhoService = inject(CarrinhoService)

  formulario = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    endereco: new FormControl(''),


  });
  
  finalizar(){
    console.log('Dados do Formulario:', this.formulario.value);
    console.log('Itens do Carrinho:', this.carrinhoService.itens());
  }
}
