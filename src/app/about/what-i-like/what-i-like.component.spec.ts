import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatILikeComponent } from './what-i-like.component';

describe('WhatILikeComponent', () => {
  let component: WhatILikeComponent;
  let fixture: ComponentFixture<WhatILikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatILikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatILikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
