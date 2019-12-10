import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondercuestionarioComponent } from './respondercuestionario.component';

describe('RespondercuestionarioComponent', () => {
  let component: RespondercuestionarioComponent;
  let fixture: ComponentFixture<RespondercuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondercuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondercuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
