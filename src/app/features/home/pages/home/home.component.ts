import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nome = 'Lais Costa Santos Teixeira';

  dadosPessoais = {
    idade: '28 anos',
    nacionalidade: 'Brasileira',
    estadoCivil: 'Solteira',
    objetivo:
      'Atuar como estagiária ou Treinee na área de Análise e Desenvolvimento de Sistemas.',
  };

  constructor() {}

  ngOnInit(): void {}
}
