import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLiteComponent } from './select-lite.component';

describe('SelectLiteComponent', () => {
  let component: SelectLiteComponent;
  let fixture: ComponentFixture<SelectLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
