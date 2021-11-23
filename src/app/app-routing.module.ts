import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoPageComponent } from './features/contato/pages/contato-page/contato-page.component';
import { CertificadoPageComponent } from './features/curriculo/pages/certificado-page/certificado-page.component';
import { ExperienciaPageComponent } from './features/curriculo/pages/experiencia-page/experiencia-page.component';
import { QualificacoesPageComponent } from './features/curriculo/pages/qualificacoes-page/qualificacoes-page.component';
import { HomeComponent } from './features/home/pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'qualificacoes', component: QualificacoesPageComponent},
  { path: 'experiencia', component: ExperienciaPageComponent},
  { path: 'contato', component: ContatoPageComponent},
  { path: 'certificado/:id', component: CertificadoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
