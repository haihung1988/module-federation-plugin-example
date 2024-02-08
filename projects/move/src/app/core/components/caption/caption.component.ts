import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdsLangPipe } from '@cds/ng-core/lang';

@Component({
  selector: 'mv-caption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss']
})
export class MvCaptionComponent {
  @Input() uiCaptionParam: string = '';
  @Input() fieldId: any;

  /**
   * Provides string value from fieldId input and provides translation based on current language.
   * @returns {string} String value of fieldId.
   */
  get caption(): string {
    if (typeof this.fieldId == 'string') {
      let text = this.translatePipe.transform(this.fieldId);
      return text;
    }
    return this.fieldId;
  }

  constructor(public translatePipe: CdsLangPipe) { }

  @HostBinding('attr.id') id: string = '';
}
