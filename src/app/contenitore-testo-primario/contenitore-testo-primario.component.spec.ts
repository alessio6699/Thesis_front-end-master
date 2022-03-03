import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaGrafoComponent } from '../crea-grafo/crea-grafo.component';

import { ContenitoreTestoPrimarioComponent } from './contenitore-testo-primario.component';

describe('ContenitoreTestoPrimarioComponent', () => {
  let component: ContenitoreTestoPrimarioComponent;
  let fixture: ComponentFixture<ContenitoreTestoPrimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenitoreTestoPrimarioComponent, CreaGrafoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreTestoPrimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
