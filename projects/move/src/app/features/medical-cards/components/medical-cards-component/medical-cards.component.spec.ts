import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCardsComponent } from './medical-cards.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CdsLangPipe } from '@cds/ng-core/lang';

describe('MedicalCardsComponent', () => {
  let component: MedicalCardsComponent;
  let fixture: ComponentFixture<MedicalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MedicalCardsComponent, HttpClientTestingModule],
      providers: [CdsLangPipe]
    });
    fixture = TestBed.createComponent(MedicalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
