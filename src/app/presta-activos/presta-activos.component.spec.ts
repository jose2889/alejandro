import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaActivosComponent } from './presta-activos.component';

describe('PrestaActivosComponent', () => {
  let component: PrestaActivosComponent;
  let fixture: ComponentFixture<PrestaActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestaActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
