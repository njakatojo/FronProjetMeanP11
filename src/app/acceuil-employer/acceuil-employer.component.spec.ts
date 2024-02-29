import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilEmployerComponent } from './acceuil-employer.component';

describe('AcceuilEmployerComponent', () => {
  let component: AcceuilEmployerComponent;
  let fixture: ComponentFixture<AcceuilEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
