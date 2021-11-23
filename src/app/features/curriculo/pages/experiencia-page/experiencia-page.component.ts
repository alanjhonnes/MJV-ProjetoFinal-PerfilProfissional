import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/curriculo.model';


@Component({
  templateUrl: './experiencia-page.component.html',
  styleUrls: ['./experiencia-page.component.scss']
})
export class ExperienciaPageComponent implements OnInit {

  titulo = "Experiência Profissional";

  experienciaProfissional = [
    { 
      logo: "https://cdn.ci.com.br/img/logo-share.png",
      empresa: "Central de Intercâmbio CI",
      cargo: "Assistente de operações Junior",
      dataInicio: "12/2019",
      dataFim: "08/2020",
      descricao: "Suporte no processo operacional dos programas de intercâmbio. Intermediação entre as agências da rede CI e os fornecedores (escolas). Envio de matrícula para novos alunos e/ou extensão de curso. Alteração de programa (data, curso, acomodação, entre outros)"
  }, 
  { 
    logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQHCxEu2ChYucA/company-logo_200_200/0/1532453702173?e=2159024400&v=beta&t=QERX7hGZ7Uri9wSQMjEiUdCAMZ9PsLazOzXtvBm4Zy4",
    empresa: "Intercâmbio Global",
    cargo: "Assistente de operações",
    dataInicio: "10/2018",
    dataFim: "12/2019",
    descricao: "Contato direto com as instituições educacionais internacionais. Processamento de matrícula, alteração e cancelamento dos programas de intercâmbio. Lançamento de venda e acompanhamento dos pagamentos junto ao departamento financeiro. Cadastro das escolas, cursos, valores e promoções no portal da empresa"
  },
  { 
    logo: "https://cdn.worldvectorlogo.com/logos/atento-3.svg",
    empresa: "Atento",
    cargo: "Assistente de SAC",
    dataInicio: "05/2017",
    dataFim: "10/2018",
    descricao: "Atendimento ao cliente. Abertura de reclamações, solicitação de cancelamento e informações gerais sobre os produtos bancários."
  },

  { 
    logo: "https://media.glassdoor.com/sqll/1086624/stb-squarelogo-1635407305778.png",
    empresa: "STB - Student Travel Bureau",
    cargo: "Assistente de vendas",
    dataInicio: "04/2015",
    dataFim: "11/2015",
    descricao: "- Atendimento no pós-venda do departamento aéreo. Cotação, alteração e cancelamento de passagens aéreas utilizando os GDS (Amadeus e Sabre)"
  }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
