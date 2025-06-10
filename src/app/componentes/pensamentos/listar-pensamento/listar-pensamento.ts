import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-pensamento.html',
  styleUrls: ['./listar-pensamento.css']
})
export class ListarPensamento implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}
