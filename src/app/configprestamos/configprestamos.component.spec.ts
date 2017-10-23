import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigprestamosComponent } from './configprestamos.component';

describe('ConfigprestamosComponent', () => {
  let component: ConfigprestamosComponent;
  let fixture: ComponentFixture<ConfigprestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigprestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigprestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
