import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenitoreInfoComponent } from './contenitore-info.component';

describe('ContenitoreInfoComponent', () => {
  let component: ContenitoreInfoComponent;
  let fixture: ComponentFixture<ContenitoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenitoreInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenitoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
