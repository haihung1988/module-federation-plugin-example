import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import { HealthContentActions } from './health-content.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HealthContentService } from '../service/health-content.service';

@Injectable()
export class HealthContentEffects {
  loadHealthContents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HealthContentActions.loadList),
      mergeMap(() =>
        this.healthContentService.getHealhContentList().pipe(
          map((response) => HealthContentActions.loadListSuccess({ healthContents: response.medicalCards })),
          catchError((error) => of(HealthContentActions.loadListFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private healthContentService: HealthContentService) {}
}
