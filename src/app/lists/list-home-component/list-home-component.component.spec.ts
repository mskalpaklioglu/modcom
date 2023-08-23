import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHomeComponentComponent } from './list-home-component.component';

describe('ListHomeComponentComponent', () => {
  let component: ListHomeComponentComponent;
  let fixture: ComponentFixture<ListHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHomeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
