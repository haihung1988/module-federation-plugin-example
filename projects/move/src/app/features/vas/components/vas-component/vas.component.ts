import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VasItemComponent } from '../vas-item-component/vas-item.component';
import { Vas } from '../../models/vas.model';

@Component({
  selector: 'mv-vas',
  standalone: true,
  imports: [CommonModule, VasItemComponent],
  templateUrl: 'vas.component.html',
  styleUrls: ['vas.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VasComponent {
  @Input() vasList: Vas[] | null = [];

  @Output() selectItemEvent: EventEmitter<Vas> = new EventEmitter<Vas>();

  onItemClick(_event: any, item: Vas | undefined) {
    this.selectItemEvent.emit(item);
  }
}
