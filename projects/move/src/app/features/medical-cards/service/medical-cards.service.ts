import { Injectable, SecurityContext } from '@angular/core';
import { Observable, take, map, of, mergeMap } from 'rxjs';
import { API_ROUTES } from '../../../core/constants/api-routes.const';
import { HttpProviderService } from '../../../core/services/http-service/http-provider.service';
import { MedicalCardsResponse } from '../models/medical-cards-response.model';
import { Filesystem, DownloadFileOptions, DownloadFileResult, Directory, WriteFileOptions, WriteFileResult } from "@capacitor/filesystem"
import { Media, MediaSaveOptions } from "@capacitor-community/media";
import { Capacitor } from '@capacitor/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MedicalCardService {
  constructor(private httpProvider: HttpProviderService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  getMedicalCardList(): Observable<MedicalCardsResponse> {
    return this.httpProvider.get(API_ROUTES.MEDICAL_CARD_LIST).pipe(
      take(1),
      map((response: any) => response)
    );
  }

  downloadImage(url: string, fileName: string = ""): Observable<boolean> {
    switch (Capacitor.getPlatform()) {
      case "web":
        return this.downloadImageOnWeb(url, fileName)
      case "ios":
        return this.downloadImageOniOS(url, fileName);
      case "android":
        return this.checkPermission().pipe(mergeMap(status => {
          return status ? this.downloadImageOnAndroid(url, fileName) : of(false)
        }))
      default: {
        return of(false)
      }
    }
  }

  private downloadImageOnWeb(url: string, fileName: string): Observable<boolean> {
    return new Observable(observeOn => {
      const sanitizer = this.sanitizer;
      function downloadFile(data: any) {
        var url: any
        if (data instanceof Blob) {
          url = sanitizer.sanitize(SecurityContext.RESOURCE_URL, sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(data)));
        } else {
          url = data;
        }
        console.log('==>downloadFile - url :>> ', url);
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.setAttribute("href", url);
        link.setAttribute("download", fileName);
        link.click();
      }
      // TODO: check CORS issues
      let headers = new HttpHeaders();
      // headers.append("Access-Control-Allow-Origin", "*");
      // headers.append("Access-Control-Allow-Methods", "GET");
      this.http.get(url, { headers, responseType: 'blob' })
        .subscribe(res => {
          downloadFile(res)
          observeOn.next(true)
        })
    })
  }

  private downloadImageOniOS(url: string, fileName: string): Observable<boolean> {
    return new Observable(observeOn => {
      // NOTE: support download directly from a public url or e64 encoded URI
      let opts: MediaSaveOptions = { path: url };
      try {
        Media.savePhoto(opts).then(response => {
          observeOn.next(true)
        })
      } catch (error) {
        observeOn.error(false)
      }
    })
  }

  private checkPermission(): Observable<boolean> {
    if (Capacitor.getPlatform() !== "android") {
      return of(true)
    }
    return new Observable(observeOn => {
      Filesystem.checkPermissions().then(res => {
        console.log('==>checkPermissions-res :>> ' + JSON.stringify(res));
        if (res.publicStorage !== "granted") {
          Filesystem.requestPermissions().then(res => {
            console.log('==>requestPermissions-res :>> ' + + JSON.stringify(res));
            if (res.publicStorage === "granted") {
              observeOn.next(true)
            } else {
              observeOn.next(false)
            }
          })
        } else {
          observeOn.next(true)
        }
      })
    })
  }

  private downloadImageOnAndroid(url: string, fileName: string): Observable<boolean> {
    return new Observable(observeOn => {
      const path = `/Download/${fileName}`
      const options: DownloadFileOptions = {
        url,
        path: path,
        directory: Directory.ExternalStorage,
        method: 'GET'
      };
      try {
        // const response: DownloadFileResult =  
        Filesystem.downloadFile(options).then(response => {
          console.log('==>saveToDownload - result :>> ', response);
          observeOn.next(true)
        })
      } catch (error) {
        observeOn.next(false)
        console.log('==>saveToDownload-err :>> ', error);
      }
    })
  }

  private async writeImageOnAndroid(data: string, fileName: string): Promise<string | undefined> {
    // NOTE: base64 encoded data
    return new Promise(async resolve => {
      const path = `/Download/${fileName}`
      const options: WriteFileOptions = {
        directory: Directory.ExternalStorage,
        path: path,
        data: data
      }
      try {
        const response: WriteFileResult = await Filesystem.writeFile(options).then()
        console.log('==>saveToDownload - result :>> ', response);
        if (response != null && response.uri != null) {
          resolve(path)
        } else {
          resolve(undefined)
        }
      } catch (error) {
        console.log('==>saveToDownload-err :>> ', error);
        resolve(undefined)
      }
    })
  }
}
