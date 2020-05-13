import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListContainerComponent } from './card-list-container.component';

describe('CardListContainerComponent', () => {
  let component: CardListContainerComponent;
  let fixture: ComponentFixture<CardListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
