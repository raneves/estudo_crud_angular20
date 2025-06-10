import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'listarPensamento',
    loadComponent: () =>
      import('./componentes/pensamentos/listar-pensamento/listar-pensamento')
        .then(m => m.ListarPensamento)
  },
  {
    path: 'criarPensamento',
    loadComponent: () =>
      import('./componentes/pensamentos/criar-pensamento/criar-pensamento')
        .then(m => m.CriarPensamento)
  }
];
