import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntivoComponent } from './aggiuntivo.component';

describe('AggiuntivoComponent', () => {
  let component: AggiuntivoComponent;
  let fixture: ComponentFixture<AggiuntivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiuntivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiuntivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
