import { TestBed } from '@angular/core/testing';

import { QualificacoesService } from './qualificacoes.service';

describe('QualificacoesService', () => {
  let service: QualificacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
