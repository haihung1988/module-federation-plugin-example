import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContentComponent } from './health-content.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HealthContentComponent', () => {
  let component: HealthContentComponent;
  let fixture: ComponentFixture<HealthContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthContentComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
