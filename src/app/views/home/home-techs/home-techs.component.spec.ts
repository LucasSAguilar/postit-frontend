import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechsComponent } from './home-techs.component';

describe('HomeTechsComponent', () => {
  let component: HomeTechsComponent;
  let fixture: ComponentFixture<HomeTechsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTechsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTechsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
