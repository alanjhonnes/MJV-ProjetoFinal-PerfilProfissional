import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperienciaPageComponent } from './pages/experiencia-page/experiencia-page.component';
import { QualificacoesPageComponent } from './pages/qualificacoes-page/qualificacoes-page.component';
import { CertificadoPageComponent } from './pages/certificado-page/certificado-page.component';
import { QualificacoesComponent } from './components/qualificacoes/qualificacoes.component';





@NgModule({
  declarations: [
    ExperienciaPageComponent,
    QualificacoesPageComponent,
    CertificadoPageComponent,
    QualificacoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CurriculoModule { }
