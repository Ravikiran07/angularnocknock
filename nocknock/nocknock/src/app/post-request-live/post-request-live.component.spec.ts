import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestLiveComponent } from './post-request-live.component';

describe('PostRequestLiveComponent', () => {
  let component: PostRequestLiveComponent;
  let fixture: ComponentFixture<PostRequestLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
