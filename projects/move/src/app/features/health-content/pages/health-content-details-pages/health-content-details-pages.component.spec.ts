import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContentDetailsPagesComponent } from './health-content-details-pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HealthContentDetailsPagesComponent', () => {
  let component: HealthContentDetailsPagesComponent;
  let fixture: ComponentFixture<HealthContentDetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthContentDetailsPagesComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthContentDetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
