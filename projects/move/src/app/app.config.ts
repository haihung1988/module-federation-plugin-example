import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

import { routes } from './app.routes';
import { RemoteConfigService } from './core/services/config-service/remote-config.service';
import { appEffects, AppStore } from './core/store/store';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LocalizationService } from './core/services/localization/localization.service';
import { CdsLangService } from '@cds/ng-core/lang';

export function initRemoteConfig(remoteConfig: RemoteConfigService) {
  return () => remoteConfig.loadConfig()
}

export function initLang(remoteConfig: LocalizationService) {
  return () => remoteConfig.loadLocalication()
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
  ]
};
