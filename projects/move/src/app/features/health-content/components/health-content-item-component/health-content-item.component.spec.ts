import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContentItemComponent } from './health-content-item.component';

describe('HealthContentItemComponent', () => {
  let component: HealthContentItemComponent;
  let fixture: ComponentFixture<HealthContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthContentItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
