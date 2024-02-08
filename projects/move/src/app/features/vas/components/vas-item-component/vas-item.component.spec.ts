import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasItemComponent } from './vas-item.component';
import { VasComponent } from '../vas-component/vas.component';

describe(VasComponent.name, () => {
  let component: VasItemComponent;
  let fixture: ComponentFixture<VasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VasItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
