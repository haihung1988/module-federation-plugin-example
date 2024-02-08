import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvCaptionComponent } from './caption.component';
import { CdsLangPipe } from '@cds/ng-core/lang';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MvCaptionComponent', () => {
  let component: MvCaptionComponent;
  let fixture: ComponentFixture<MvCaptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MvCaptionComponent, HttpClientTestingModule],
      providers: [CdsLangPipe]
    });
    fixture = TestBed.createComponent(MvCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
