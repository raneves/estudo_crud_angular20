import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento_interface } from '../pensamento/pensamento_interface.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrls: ['./editar-pensamento.css']
})
export class EditarPensamento {
  pensamento : Pensamento_interface = {
        conteudo: '',
        autoria: '',
        modelo: 'modelo1'
  }

  constructor(
        private service: PensamentoService,
        private router: Router,
        private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId((id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
