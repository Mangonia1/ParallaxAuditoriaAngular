import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaporcalificarComponent } from './listaporcalificar.component';

describe('ListaporcalificarComponent', () => {
  let component: ListaporcalificarComponent;
  let fixture: ComponentFixture<ListaporcalificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaporcalificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaporcalificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
