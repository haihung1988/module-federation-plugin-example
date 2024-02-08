import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InappBrowserDemoComponent } from './inapp-browser-demo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InappBrowserDemoComponent', () => {
  let component: InappBrowserDemoComponent;
  let fixture: ComponentFixture<InappBrowserDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InappBrowserDemoComponent, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(InappBrowserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
