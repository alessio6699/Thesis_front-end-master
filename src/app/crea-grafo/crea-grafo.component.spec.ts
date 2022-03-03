import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaGrafoComponent } from './crea-grafo.component';

describe('CreaGrafoComponent', () => {
  let component: CreaGrafoComponent;
  let fixture: ComponentFixture<CreaGrafoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaGrafoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaGrafoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
