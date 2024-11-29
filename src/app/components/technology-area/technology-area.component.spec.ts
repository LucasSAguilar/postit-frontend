import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyAreaComponent } from './technology-area.component';

describe('TechnologyAreaComponent', () => {
  let component: TechnologyAreaComponent;
  let fixture: ComponentFixture<TechnologyAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
