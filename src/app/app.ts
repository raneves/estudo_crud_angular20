import { Component } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Cabecalho, Rodape],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'estudo_crud_angular20';
}
