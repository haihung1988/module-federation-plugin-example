import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalCard } from '../../models/medical-card.model';
import { CdsLinkModule } from '@cds/ng-web-components/link';
import { CdsLinkConfig } from '@cds/ng-core/link';
import { CdsButtonModule } from '@cds/ng-web-components/button';
import { MedicalCardService } from '../../service/medical-cards.service';
import { Toast } from '@capacitor/toast';
import { MvCaptionComponent } from 'src/app/core/components/caption/caption.component';

@Component({
  selector: 'mv-medical-cards',
  standalone: true,
  imports: [CommonModule, CdsLinkModule, CdsButtonModule, MvCaptionComponent],
  templateUrl: './medical-cards.component.html',
  styleUrls: ['./medical-cards.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicalCardsComponent {
  @Input() medicalCardList: MedicalCard[] | null = [];

  @Output() selectItemEvent: EventEmitter<MedicalCard> = new EventEmitter<MedicalCard>();

  constructor(private medicalCardService: MedicalCardService) {}
  seeAllLinkConfig: CdsLinkConfig = {
    label: 'See all'
  };

  onItemClick(_event: any, item: MedicalCard | undefined) {
    this.selectItemEvent.emit(item);
  }

  downloadMedicalCard(url: string | undefined) {
    console.log('==>downloadMedicalCard :>> url: ' + url);
    if (url !== undefined) {
      this.medicalCardService.downloadImage(url, 'medical_card.png').subscribe(async (res) => {
        console.log('==>downloadMedicalCard :>> ', res);
        await Toast.show({
          text: 'Image was saved to ' + res
        });
      });
    }
  }
}
