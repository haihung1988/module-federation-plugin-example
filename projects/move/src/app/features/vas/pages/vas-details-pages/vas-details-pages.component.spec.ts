import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasDetailsPagesComponent } from './vas-details-pages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(VasDetailsPagesComponent.name, () => {
  let component: VasDetailsPagesComponent;
  let fixture: ComponentFixture<VasDetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VasDetailsPagesComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VasDetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
