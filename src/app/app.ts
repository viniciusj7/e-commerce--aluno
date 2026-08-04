import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { usuarioLogado, login, logout } from './core/auth';
import { Header } from './shared/layout/header/header';
import { MatAnchor } from '@angular/material/button';
//import { Produto } from './features/produtos/produto/produto';
//import { ListProdutos } from './features/produtos/list-produtos/list-produtos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink , Header,MatAnchor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  // nomeLoja = 'Mini box são Francisco'; //nome do e-commerce
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
