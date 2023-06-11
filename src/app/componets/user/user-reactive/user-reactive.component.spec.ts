import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactiveComponent } from './user-reactive.component';

describe('UserReactiveComponent', () => {
  let component: UserReactiveComponent;
  let fixture: ComponentFixture<UserReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserReactiveComponent]
    });
    fixture = TestBed.createComponent(UserReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
