import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CommonModule } from '@angular/common';
import { CdsIonBottomBarModule } from '@cds/ng-ionic-components/bottom-bar';
import { CdsButtonModule } from '@cds/ng-web-components/button';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { CdsLangService } from '@cds/ng-core/lang';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { initRemoteConfig, initLang } from './app.config';
import { RemoteConfigService } from './core/services/config-service/remote-config.service';
import { LocalizationService } from './core/services/localization/localization.service';
import { AppStore, appEffects } from './core/store/store';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(APP_ROUTES),
    CommonModule, RouterOutlet, IonicModule, CdsIonBottomBarModule, CdsButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initRemoteConfig,
      deps: [RemoteConfigService],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [LocalizationService, CdsLangService],
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({ mode: 'ios' }),
    provideStore(AppStore),
    provideEffects(appEffects),
    importProvidersFrom(StoreDevtoolsModule.instrument())
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
