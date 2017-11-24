import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTravellerComponent } from './home-traveller.component';

describe('HomeTravellerComponent', () => {
  let component: HomeTravellerComponent;
  let fixture: ComponentFixture<HomeTravellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTravellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
