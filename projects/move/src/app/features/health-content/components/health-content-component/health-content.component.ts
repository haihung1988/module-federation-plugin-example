import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthContent } from '../../models/health-content.model';
import { HealthContentItemComponent } from '../health-content-item-component/health-content-item.component';
import { CdsLinkConfig } from '@cds/ng-core/link';
import { CdsLinkModule } from '@cds/ng-web-components/link';

@Component({
  selector: 'mv-health-content',
  standalone: true,
  imports: [CommonModule, HealthContentItemComponent, CdsLinkModule],
  templateUrl: 'health-content.component.html',
  styleUrls: ['health-content.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthContentComponent {
  @Input() healthContentList: HealthContent[] | null = [];

  @Output() selectHealthItemEvent: EventEmitter<HealthContent> = new EventEmitter<HealthContent>();
  @Output() selectSeeAllEvent = new EventEmitter();

  seeAllLinkConfig: CdsLinkConfig = {
    label: 'See all'
  };

  onHealthItemClick(_event: any, item: HealthContent | undefined) {
    this.selectHealthItemEvent.emit(item);
  }

  onSeeAllClick() {
    this.selectSeeAllEvent.emit();
  }
}
