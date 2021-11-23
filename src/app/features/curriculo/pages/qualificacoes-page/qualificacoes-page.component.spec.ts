import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificacoesPageComponent } from './qualificacoes-page.component';

describe('QualificacoesPageComponent', () => {
  let component: QualificacoesPageComponent;
  let fixture: ComponentFixture<QualificacoesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificacoesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificacoesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
