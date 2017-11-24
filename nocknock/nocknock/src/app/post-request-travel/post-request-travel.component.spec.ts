import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestTravelComponent } from './post-request-travel.component';

describe('PostRequestTravelComponent', () => {
  let component: PostRequestTravelComponent;
  let fixture: ComponentFixture<PostRequestTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
