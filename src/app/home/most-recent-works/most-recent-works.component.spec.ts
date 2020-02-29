import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentWorksComponent } from './most-recent-works.component';

describe('MostRecentWorksComponent', () => {
  let component: MostRecentWorksComponent;
  let fixture: ComponentFixture<MostRecentWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRecentWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
