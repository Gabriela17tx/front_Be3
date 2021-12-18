import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/Paciente';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  paciente: Paciente = new Paciente

  sexo: string

  constructor(
    private authServce: AuthService
  ) { }


  ngOnInit() {
    window.scroll(0,0)

  }
  genero(event: any){
    this.sexo = event.target.value
  }
  cadastrar(){
    this.paciente.SEXO = this.sexo

    this.authServce.cadastrar(this.paciente).subscribe((resp: Paciente)=> {
      this.paciente = resp
      alert( 'Paciente cadastrado com sucesso!' )
    })

  }


}
