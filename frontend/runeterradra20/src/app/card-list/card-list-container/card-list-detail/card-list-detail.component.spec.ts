import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListDetailComponent } from './card-list-detail.component';

describe('CardListDetailComponent', () => {
  let component: CardListDetailComponent;
  let fixture: ComponentFixture<CardListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
