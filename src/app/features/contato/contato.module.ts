import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContatoPageComponent } from './pages/contato-page/contato-page.component';




@NgModule({
  declarations: [
    ContatoPageComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContatoModule { }
