import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MedicalCardDetailsPagesComponent } from './medical-card-details-pages.component';

describe(MedicalCardDetailsPagesComponent.name, () => {
  let component: MedicalCardDetailsPagesComponent;
  let fixture: ComponentFixture<MedicalCardDetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalCardDetailsPagesComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalCardDetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
