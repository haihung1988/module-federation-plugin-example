import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES_CONFIG } from 'src/app/core/constants/routes.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'mv-promo-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'promo-banner.component.html',
  styleUrls: ['promo-banner.component.scss'],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PromoBannerComponent {
  constructor(private router: Router) {}

  onPromoClick1(_event: any) {
    window.location.href = 'https://www.manulife.com.vn/';
  }

  onPromoClick2(_event: any) {
    // InAppBrowser.openWebView({
    //   url: 'https://www.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html'
    // });
  }

  onPromoClick3(_event: any) {
    this.router.navigateByUrl(ROUTES_CONFIG.VAS_DETAILS);
  }
}
