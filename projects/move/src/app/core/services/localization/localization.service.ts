import { Injectable } from '@angular/core';
import { HttpProviderService } from '../http-service/http-provider.service';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { API_ROUTES } from '../../constants/api-routes.const';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { RemoteConfigService } from '../config-service/remote-config.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CdsLangService, CdsLangPipe } from '@cds/ng-core/lang';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private initSub = new BehaviorSubject<boolean>(false);
  public lang: string = this.remoteConfig.lang
  private cdsLangPipe: CdsLangPipe

  constructor(private httpProvider: HttpProviderService, private langService: CdsLangService, private remoteConfig: RemoteConfigService) {
    this.cdsLangPipe = new CdsLangPipe(langService)
  }

  public onInit(): Observable<boolean> {
    return this.initSub.asObservable();
  }

  loadLocalication() {
    this.remoteConfig.onInit().subscribe(completed => {
      if (completed) {
        console.log("loadLocalication-lang:" + this.remoteConfig.lang);
        this.langService.setCurrentLang(this.remoteConfig.lang)
        this.lang = this.remoteConfig.lang
      }
    })
    return this.loadLocalizationFromRemote()
  }

  loadLocalizationFromRemote() {
    return this.httpProvider.get(API_ROUTES.LOCALIZATION)
      .pipe(
        take(1),
        map((res: any) => {
          console.log('loadLocalizationFromRemote-res :>> ', res);
          var success
          if (res != null) {
            this.langService.setLangEntries(res)
            success = true
          } else {
            success = false
          }
          this.initSub.next(success)
          return success
        }),
        catchError(err => {
          console.log('loadLocalization-failed to load remote configs with error :>> ', err);
          this.initSub.next(false)
          return of(false);
        })
      )
  }

  setCurrentLang(lang: string) {
    this.lang = lang
    this.langService.setCurrentLang(this.lang)
    console.log('setCurrentLang :>> ', lang);
  }

  transform(key: string): string {
    return this.cdsLangPipe.transform(key)
  }
}
