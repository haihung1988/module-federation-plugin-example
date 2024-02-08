import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthContentSeeAllPagesComponent } from './health-content-see-all-pages.component';
import { CdsLangPipe } from '@cds/ng-core/lang';

describe('HealthContentSeeAllPagesComponent', () => {
  let component: HealthContentSeeAllPagesComponent;
  let fixture: ComponentFixture<HealthContentSeeAllPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthContentSeeAllPagesComponent],
      providers: [CdsLangPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthContentSeeAllPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
