import { Injectable } from '@angular/core';
import { Observable, map, pipe, take } from 'rxjs';
import { API_ROUTES } from '../../../core/constants/api-routes.const';
import { HttpProviderService } from '../../../core/services/http-service/http-provider.service';
import { Vas } from '../models/vas.model';
import { VasResponse } from '../models/vas-response.model';

@Injectable({
  providedIn: 'root'
})
export class VasService {
  constructor(private httpProvider: HttpProviderService) {}

  getVasList(): Observable<VasResponse> {
    return this.httpProvider.get(API_ROUTES.VAS_LIST).pipe(
      take(1),
      map((response: any) => response)
    );
  }
}
