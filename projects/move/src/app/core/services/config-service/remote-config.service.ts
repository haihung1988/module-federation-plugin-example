import { Injectable } from '@angular/core';
import { RemoteConfig } from './remote-config';
import { HttpProviderService } from '../http-service/http-provider.service';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { API_ROUTES } from '../../constants/api-routes.const';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { CdsLangService } from '@cds/ng-core/lang';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService extends RemoteConfig {

  private initSub = new BehaviorSubject<boolean>(false);

  constructor(private httpProvider: HttpProviderService, private langService: CdsLangService) {
    super();
  }

  public onInit(): Observable<boolean> {
    return this.initSub.asObservable();
  }

  loadConfig() {
    return this.httpProvider.get(API_ROUTES.CONFIGURATION)
      .pipe(
        take(1),
        map((res: any) => {
          console.log('loadConfig with res :>> ', res);
          if (res != null) {
            Object.assign(this, res);
            this.saveConfig(res);
            this.onLoadConfigCompleted()
            return of(true)
          } else {
            return this.loadLocalConfig()
          }
        }),
        catchError(err => {
          console.log('loadConfig-failed to load remote configs with error :>> ', err);
          return of(false);
        })
      )
  }

  private saveConfig(config: RemoteConfig) {
    // TODO: implement logic to store the config to cache
  }

  private getStoredConfig(): RemoteConfig | any {
    // TODO: implement logic to store the config to cache
    return null;
  }

  private loadLocalConfig() {
    const storedConfig = this.getStoredConfig()
    if (storedConfig != null) {
      console.log('loadLocalConfig from storedConfig with res :>> ', storedConfig);
      Object.assign(this, storedConfig)
      return of(true)
    } else {
      return this.httpProvider.http.get<RemoteConfig>('assets/local_configuration.json')
        .pipe(
          take(1),
          map((res: any) => {
            console.log('loadLocalConfig from assets with res :>> ', res);
            Object.assign(this, res);
            this.onLoadConfigCompleted()
            return of(true)
          }),
          catchError(err => {
            console.log('loadConfig-failed to load remote configs with error :>> ', err);
            return of(false);
          })
        )
    }
  }

  private onLoadConfigCompleted() {
    this.initSub.next(true)
  }
}