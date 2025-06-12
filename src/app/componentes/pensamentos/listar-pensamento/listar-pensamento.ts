import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Pensamento } from "../pensamento/pensamento";
import { CommonModule } from '@angular/common';
import { Pensamento_interface } from '../pensamento/pensamento_interface.model';
import { PensamentoService } from '../pensamento/pensamento.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule, Pensamento, CommonModule, HttpClientModule],
  templateUrl: './listar-pensamento.html',
  styleUrls: ['./listar-pensamento.css']
})
export class ListarPensamento implements OnInit{

  listaPensamentos: Pensamento_interface[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
