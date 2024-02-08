import { Injectable } from '@angular/core';
import { Observable, map, pipe, take } from 'rxjs';
import { API_ROUTES } from '../../../core/constants/api-routes.const';
import { HttpProviderService } from '../../../core/services/http-service/http-provider.service';
import { HealthContentsResponse } from '../models/health-contents-response.model';

@Injectable({
  providedIn: 'root'
})
export class HealthContentService {
  constructor(private httpProvider: HttpProviderService) {}

  getHealhContentList(): Observable<HealthContentsResponse> {
    return this.httpProvider.get(API_ROUTES.HEALTH_CONTENT_LIST).pipe(
      take(1),
      map((response: any) => response)
    );
  }
}
