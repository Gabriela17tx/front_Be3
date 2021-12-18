import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../model/Paciente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar (paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>('http://db_sql.be3.co/Paciente/cadastrar', paciente)

  }


}
