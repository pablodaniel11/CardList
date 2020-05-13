import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenuBarComponent } from './card-menu-bar.component';

describe('CardMenuBarComponent', () => {
  let component: CardMenuBarComponent;
  let fixture: ComponentFixture<CardMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
