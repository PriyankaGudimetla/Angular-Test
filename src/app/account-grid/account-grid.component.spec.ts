import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGridComponent } from './account-grid.component';

describe('AccountGridComponent', () => {
  let component: AccountGridComponent;
  let fixture: ComponentFixture<AccountGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
