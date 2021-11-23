import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoPageComponent } from './certificado-page.component';

describe('CertificadoPageComponent', () => {
  let component: CertificadoPageComponent;
  let fixture: ComponentFixture<CertificadoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
