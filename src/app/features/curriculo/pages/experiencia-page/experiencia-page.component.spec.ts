import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPageComponent } from './experiencia-page.component';

describe('ExperienciaPageComponent', () => {
  let component: ExperienciaPageComponent;
  let fixture: ComponentFixture<ExperienciaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
