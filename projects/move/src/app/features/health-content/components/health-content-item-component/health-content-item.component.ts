import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { HealthContent } from '../../models/health-content.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mv-health-content-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: 'health-content-item.component.html',
  styleUrls: ['health-content-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthContentItemComponent {
  @Input() item: HealthContent | undefined;
}
