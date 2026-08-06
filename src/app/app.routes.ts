// // import { Routes } from '@angular/router';
// // //import { ListProdutos } from './features/produtos/list-produtos/list-produtos'; import legado
// // import { Carrinho } from './features/carrinho/carrinho/carrinho';
// // import { Home } from './features/home/home/home';
// // export const routes: Routes = [
// //   { 
// //     path: '', component: Home,
// // },
// // //Código legado com LazyLoading
// // //   { 
// // //     path: 'produtos', component: ListProdutos,
// // // },

// // {
// //   path: 'produtos',
// //   loadComponent: () =>
// //     import('./features/produtos/list-produtos/list-produtos').then(m => m.ListProdutos)
// // },
// // {
// //   path: 'carrinho', component: Carrinho,
// // },
// // ];
//! codigo Final com LazyLoading e LoadComponent
//! Importações
import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./features/home/home/home').then((m) => m.Home),
  },
 { path: 'produtos',
   loadComponent: () =>
    import('./features/produtos/list-produtos/list-produtos').then((m) => m.ListProdutos),
  },
  {
    path: 'carrinho',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/carrinho/carrinho/carrinho').then((m) => m.Carrinho),
  },
  {
    path: 'checkout',
    loadComponent:()=>
      import('./features/checkout/Checkout/checkout').then((m) => m.Checkout),
  },
  {
    path:'**',
    redirectTo: '',
  },
];