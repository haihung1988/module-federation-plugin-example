import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTabComponent } from './health-tab-pages.component';
import { HealthContentService } from '../health-content/service/health-content.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HealthContentState } from '../health-content/store/health-content.reducer';
import { RouterTestingModule } from '@angular/router/testing';
import { CdsLangPipe } from '@cds/ng-core/lang';

describe('HealthTabComponent', () => {
  let component: HealthTabComponent;
  let fixture: ComponentFixture<HealthTabComponent>;

  const initialState: HealthContentState = {
    healthContents: [],
    loading: false,
    error: ''
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthTabComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [HealthContentService, provideMockStore({ initialState }), CdsLangPipe]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should navigate to health content details', () => {
  //   component.selectHealthContentItemEvent('');
  //   expect(component).toBeTruthy();
  // });
});
