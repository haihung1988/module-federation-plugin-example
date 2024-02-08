import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Vas } from '../../models/vas.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'mv-vas-item',
  standalone: true,
  imports: [DatePipe],
  templateUrl: 'vas-item.component.html',
  styleUrls: ['vas-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VasItemComponent {
  @Input() item: Vas | undefined;
}
