import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvEmployerComponent } from './rdv-employer.component';

describe('RdvEmployerComponent', () => {
  let component: RdvEmployerComponent;
  let fixture: ComponentFixture<RdvEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
