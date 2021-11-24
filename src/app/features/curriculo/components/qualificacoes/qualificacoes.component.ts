import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoIdiomas, FormacaoAcademica, Qualificacoes } from '../../pages/models/curriculo.model';
import { QualificacoesService } from '../../services/qualificacoes.service';

@Component({
  selector: 'app-qualificacoes',
  templateUrl: './qualificacoes.component.html',
  styleUrls: ['./qualificacoes.component.scss']
})
export class QualificacoesComponent implements OnInit {
  @Input()
  condition?: boolean;

  @Input()
  qualificacoes?: Qualificacoes;

  tituloFAcademica = "Formação Acadêmica"
  tituloIdioma = "Idiomas";
  tituloCursos = "Cursos Complementares"

  formacaoAcademica: Array<FormacaoAcademica> = [
    {
      curso: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      escola: 'Fatec Ferraz de Vasconcelos',
      conclusao: 'Previsto para 12/2023',
    },

    {
      curso: 'Turismo',
      escola: 'Universidade Nove de Julho (UNINOVE)',
      conclusao: '08/2015',
    },
  ];
  
  cursosIdiomas: Array<CursoIdiomas> = [
    {idioma: "Inglês",
    escola: "Seda College Online",
    nivel: "Intermediário - B2"},

    { idioma: "Espanhol",
      escola: "Fatec",
      nivel: "Básico"}

  ]

  cursos: Array<Qualificacoes> = [ ];

  filteredQualificacoes: Array<Qualificacoes> = [ ]; 



  constructor(private qualificacoesService:QualificacoesService,
    private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.qualificacoesService.getQualificacoes();
    this.filteredQualificacoes = this.cursos;
  }

  searchCurso(event: any){
    const value = event.target.value;
    const cursos = this.cursos.filter(
      (curso) => curso.curso.toUpperCase().search(value.toUpperCase())  > -1);
    this.filteredQualificacoes = cursos;
    }

    navigateToCertificado(){
      this.router.navigateByUrl(`certificado/${this.cursos}`);
      /**this.router.navigateByUrl(`certificado/${this.cursos?.id}`); */
    }
}
