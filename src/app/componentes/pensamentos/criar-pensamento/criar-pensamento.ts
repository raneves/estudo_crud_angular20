import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamento_interface } from '../pensamento/pensamento_interface.model';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamento.html',
  styleUrls: ['./criar-pensamento.css']
})
export class CriarPensamento implements OnInit {

  pensamento : Pensamento_interface = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

   criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    alert("Ação cancelada!")
  }

}
