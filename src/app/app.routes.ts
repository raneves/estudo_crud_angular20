import { Routes } from '@angular/router';
import { ExcluirPensamento } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';

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
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    loadComponent: () =>
      import('./componentes/pensamentos/excluir-pensamento/excluir-pensamento')
        .then(m => m.ExcluirPensamento)
  },
   {
    path: 'pensamentos/editarPensamento/:id',
    loadComponent: () =>
      import('./componentes/pensamentos/editar-pensamento/editar-pensamento')
        .then(m => m.EditarPensamento)
  }
];
