import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento_interface } from './pensamento_interface.model';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

   private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento_interface[]> {
    return this.http.get<Pensamento_interface[]>(this.API)
  }

  criar(pensamento: Pensamento_interface): Observable<Pensamento_interface> {
    return this.http.post<Pensamento_interface>(this.API, pensamento)
  }

  editar(pensamento: Pensamento_interface): Observable<Pensamento_interface> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento_interface>(url, pensamento )

  }

  excluir(id: string): Observable<Pensamento_interface> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento_interface>(url)
  }

 buscarPorId(id: string): Observable<Pensamento_interface> {
  const url = `${this.API}/${id}`;
  return this.http.get<Pensamento_interface>(url);
}


}
