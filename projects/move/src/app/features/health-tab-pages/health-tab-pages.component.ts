import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AsyncPipe, CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HealthContentComponent } from '../health-content/components/health-content-component/health-content.component';
import { HealthContent } from '../health-content/models/health-content.model';
import { PromoBannerComponent } from '../promo-banner/promo-banner.component';
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { HealthContentActions } from '../health-content/store/health-content.actions';
import { HealthContentSelector } from '../health-content/store/health-content.selectors';
import { MedicalCardsComponent } from '../medical-cards/components/medical-cards-component/medical-cards.component';
import { MedicalCard } from '../medical-cards/models/medical-card.model';
import { MedicalCardSelector } from '../medical-cards/store/medical-card.selectors';
import { MedicalCardActions } from '../medical-cards/store/medical-card.actions';
import { CdsIonIconModule } from '@cds/ng-ionic-components/icon';
import { CdsIonTopBarModule } from '@cds/ng-ionic-components/top-bar';
import { Vas } from '../vas/models/vas.model';
import { VasSelector } from '../vas/store/vas.selectors';
import { VasActions } from '../vas/store/vas.actions';
import { VasComponent } from '../vas/components/vas-component/vas.component';
import { CdsLangPipe } from '@cds/ng-core/lang';
import { LocalizationService } from '../../core/services/localization/localization.service';
import { ROUTES_CONFIG } from '../../core/constants/routes.constant';
import { IAppState } from 'src/app/core/store/store';
import { InappBrowserDemoComponent } from '../example/inapp-browser-demo/inapp-browser-demo.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { reduce } from 'rxjs/operators';
// import { InAppBrowser } from 'customer-app/plugins/capacitor-inappbrowser/src';
import { CdsButtonModule } from '@cds/ng-web-components/button';
import { MvCaptionComponent } from 'src/app/core/components/caption/caption.component';
import { RemoteConfigService } from 'src/app/core/services/config-service/remote-config.service';

@Component({
  selector: 'mv-health-tab-pages',
  standalone: true,
  templateUrl: 'health-tab-pages.component.html',
  styleUrls: ['health-tab-pages.component.scss'],
  imports: [
    CommonModule,
    PromoBannerComponent,
    HealthContentComponent,
    MedicalCardsComponent,
    AsyncPipe,
    JsonPipe,
    CdsIonTopBarModule,
    CdsIonIconModule,
    VasComponent,
    InappBrowserDemoComponent,
    NgxSkeletonLoaderModule,
    CdsButtonModule,
    MvCaptionComponent
  ]
})
export class HealthTabComponent implements AfterContentChecked {
  selectedLang = 'EN';
  healthContents$: Observable<HealthContent[]>;
  medicalCards$: Observable<MedicalCard[]>;
  vas$: Observable<Vas[]>;
  isLoading$: Observable<boolean>;
  promoBannerEnabled: boolean = false

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    public translatePipe: CdsLangPipe,
    private localizationService: LocalizationService,
    private changeDetector: ChangeDetectorRef,
    private remoteConfig: RemoteConfigService
  ) {
    this.healthContents$ = this.store.select(HealthContentSelector);
    this.medicalCards$ = this.store.select(MedicalCardSelector);
    this.vas$ = this.store.select(VasSelector);
    this.isLoading$ = combineLatest([
      this.store.select((state) => state.healthContent.loading),
      this.store.select((state) => state.medicalCard.loading),
      this.store.select((state) => state.vas.loading)
    ]).pipe(
      map((loadings) => {
        return loadings[0] && loadings[1] && loadings[2];
      })
    );
    this.loadHealthContents();
    this.loadMedicalCards();
    this.loadVas();
    this.testTranslatePipe();
    this.selectedLang = this.localizationService.lang.toLocaleUpperCase();
    this.promoBannerEnabled = remoteConfig.promoBannerEnabled
  }

  // Health content events
  loadHealthContents() {
    this.store.dispatch(HealthContentActions.loadList());
  }

  selectHealthContentItemEvent(_event: any) {
    // this.router.navigateByUrl(ROUTES_CONFIG.HEALTH_CONTENT_DETAILS);

    // InAppBrowser.openWebView({
    //   url: 'https://www.manulife.com.hk/content/experience-fragments/insurance/hongkong/manulifemove_content/english/men-s-health-champion-richard-ekkebus-on-why-men-s-health-matter/master.html'
    // });
  }

  selectSeeAllEvent() {
    this.router.navigateByUrl(ROUTES_CONFIG.HEALTH_CONTENT_SEE_ALL);
  }

  // Medical cards events
  loadMedicalCards() {
    this.store.dispatch(MedicalCardActions.loadList());
  }

  selectMedicalCardItemEvent(_event: any) {
    this.router.navigateByUrl(ROUTES_CONFIG.MEDICAL_CARD_DETAILS);
  }

  // Vas events
  loadVas() {
    this.store.dispatch(VasActions.loadList());
  }

  selectVasItemEvent(_event: any) {
    this.router.navigateByUrl(ROUTES_CONFIG.VAS_DETAILS);
  }

  testTranslatePipe() {
    let text = this.translatePipe.transform('promoBannerTitle');
    console.log('promoBannerTitle :>> ', text);
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  changeLanguage() {
    const lang = this.selectedLang.toLocaleLowerCase() == 'en' ? 'vi' : 'en';
    this.selectedLang = lang.toUpperCase();
    console.log('this.selectedLang :>> ', lang.toUpperCase());
    this.localizationService.setCurrentLang(lang.toLocaleLowerCase());
  }
}
