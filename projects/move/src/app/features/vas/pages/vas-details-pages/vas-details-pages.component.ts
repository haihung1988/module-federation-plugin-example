import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CdsIonIconModule } from '@cds/ng-ionic-components/icon';
import { CdsIonTopBarModule } from '@cds/ng-ionic-components/top-bar';
import { CdsIonButtonModule } from '@cds/ng-ionic-components/button';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Overlay } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
// import { InAppBrowser } from 'customer-app/plugins/capacitor-inappbrowser/src';

@Component({
  selector: 'mv-vas-details-pages',
  standalone: true,
  imports: [FormsModule, CdsIonTopBarModule, CdsIonIconModule, CdsIonButtonModule],
  providers: [Overlay],
  templateUrl: './vas-details-pages.component.html',
  styleUrls: ['./vas-details-pages.component.scss']
})
export class VasDetailsPagesComponent implements OnInit, AfterContentChecked {
  constructor(
    private http: HttpClient,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private location: Location
  ) {}
  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  onCTAClick() {
    // this.router.navigateByUrl('https://manulife.wellcare.vn/consultation-indepth?locale=en');
    // window.location.href = 'https://manulife.wellcare.vn/consultation-indepth?locale=en';
    // window.location.href =
    //   'https://www.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html';
    // window.open(
    //   'https://stg-ap.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html',
    //   '_self'
    // );
    // Browser.open({
    //   url: 'https://manulife.wellcare.vn/consultation-indepth?locale=en'
    // });
    // this.toast.info('Notice me senpai', { action: 'I see you!' });
    // InAppBrowser.openWebView({
    //   url: 'https://manulife.wellcare.vn/consultation-indepth?locale=en'
    // });
  }

  onBack() {
    this.location.back();
  }
}
