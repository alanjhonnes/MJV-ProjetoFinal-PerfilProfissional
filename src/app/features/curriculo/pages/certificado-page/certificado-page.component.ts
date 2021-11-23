import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { QualificacoesService } from '../../services/qualificacoes.service';
import { Qualificacoes } from '../models/curriculo.model';

@Component({
  templateUrl: './certificado-page.component.html',
  styleUrls: ['./certificado-page.component.scss']
})
export class CertificadoPageComponent implements OnInit {

  curso: Qualificacoes | undefined;
  
  
  constructor(private activatedRoute: ActivatedRoute,
    private qualificacoesService: QualificacoesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const curso = this.qualificacoesService.getCertificadoById(params.id);
      this.curso = curso;
      console.log(curso);
    })

  }
}
