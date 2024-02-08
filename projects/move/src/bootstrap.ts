import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { appConfig } from './app/app.config';

import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';

// import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CdsLangService } from '@cds/ng-core/lang';
import { RemoteConfigService } from './app/core/services/config-service/remote-config.service';
import { LocalizationService } from './app/core/services/localization/localization.service';
import { AppStore, appEffects } from './app/core/store/store';

export function initRemoteConfig(remoteConfig: RemoteConfigService) {
  return () => remoteConfig.loadConfig()
}

export function initLang(remoteConfig: LocalizationService) {
  return () => remoteConfig.loadLocalication()
}

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule, {

})
  .catch(err => console.error(err));
