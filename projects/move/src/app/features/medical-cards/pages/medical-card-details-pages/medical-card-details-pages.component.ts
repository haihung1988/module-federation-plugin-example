import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CdsIonTopBarModule } from '@cds/ng-ionic-components/top-bar';
import { CdsIonIconModule } from '@cds/ng-ionic-components/icon';
import { CdsIonButtonModule } from '@cds/ng-ionic-components/button';
import { MedicalCardService } from '../../service/medical-cards.service';
import { Toast } from '@capacitor/toast';
import { Capacitor } from '@capacitor/core';
import { LocalizationService } from 'src/app/core/services/localization/localization.service';
@Component({
  selector: 'mv-medical-card-details-pages',
  standalone: true,
  imports: [CdsIonTopBarModule, CdsIonIconModule, CdsIonButtonModule],
  templateUrl: './medical-card-details-pages.component.html',
  styleUrls: ['./medical-card-details-pages.component.scss']
})
export class MedicalCardDetailsPagesComponent implements OnInit, AfterContentChecked {
  constructor(
    private medicalCardService: MedicalCardService,
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef,
    private location: Location,
    private localizationService: LocalizationService
  ) { }
  ngOnInit() { }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  downloadMedicalCard() {
    let url = 'https://uat.servicing.move.manulife.com/blob/public/vca_static/card1.png';
    console.log('==>downloadMedicalCard :>> url: ' + url);
    if (url !== undefined) {
      this.medicalCardService.downloadImage(url, 'medical_card.png').subscribe(async (success) => {
        console.log('==>downloadMedicalCard-success :>> ', success);
        await Toast.show({
          text: this.getDownloadSuccessMessage(success),
          position: "top"
        });
      });
    }
  }

  private getDownloadSuccessMessage(success: boolean): string {
    if (success) {
      if (Capacitor.getPlatform() === "ios") {
        return this.localizationService.transform("ios_medical_card_download_success_message")
      } else if (Capacitor.getPlatform() === "android") {
        return this.localizationService.transform("android_medical_card_download_success_message")
      } else {
        return "Image was saved"
      }
    } else {
      return this.localizationService.transform("medical_card_download_failed_message")
    }
  }

  onBack() {
    this.location.back();
  }
}
