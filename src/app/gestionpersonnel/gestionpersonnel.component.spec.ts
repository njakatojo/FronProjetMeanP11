import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpersonnelComponent } from './gestionpersonnel.component';

describe('GestionpersonnelComponent', () => {
  let component: GestionpersonnelComponent;
  let fixture: ComponentFixture<GestionpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionpersonnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
