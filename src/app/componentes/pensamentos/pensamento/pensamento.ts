import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento_interface } from './pensamento_interface.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.html',
  styleUrls: ['./pensamento.css']
})
export class Pensamento implements OnInit{

  @Input() pensamento: Pensamento_interface = {
    id: '0',
    conteudo: 'I love Angular',
    autoria: 'Romulo',
    modelo: 'modelo3'
  };

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
