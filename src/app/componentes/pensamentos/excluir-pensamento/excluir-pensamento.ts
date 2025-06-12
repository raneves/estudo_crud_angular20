import { Component } from '@angular/core';
import { Pensamento_interface } from '../pensamento/pensamento_interface.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento/pensamento.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrls: ['./excluir-pensamento.css']
})
export class ExcluirPensamento implements OnInit{
  pensamento : Pensamento_interface = {
      conteudo: '',
      autoria: '',
      modelo: 'modelo1'
    }

     constructor(
              private service: PensamentoService,
              private router: Router,
              private route: ActivatedRoute) {

      }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId((id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
