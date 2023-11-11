import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedDetailComponent } from './coursed-detail.component';

describe('CoursedDetailComponent', () => {
  let component: CoursedDetailComponent;
  let fixture: ComponentFixture<CoursedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursedDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
