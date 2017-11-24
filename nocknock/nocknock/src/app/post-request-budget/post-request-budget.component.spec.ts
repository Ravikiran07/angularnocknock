import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRequestBudgetComponent } from './post-request-budget.component';

describe('PostRequestBudgetComponent', () => {
  let component: PostRequestBudgetComponent;
  let fixture: ComponentFixture<PostRequestBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRequestBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRequestBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
