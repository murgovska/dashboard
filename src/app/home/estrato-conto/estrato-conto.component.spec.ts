import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstratoContoComponent } from './estrato-conto.component';

describe('EstratoContoComponent', () => {
  let component: EstratoContoComponent;
  let fixture: ComponentFixture<EstratoContoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstratoContoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstratoContoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
