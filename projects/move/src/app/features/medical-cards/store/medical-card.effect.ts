import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import { MedicalCardActions } from './medical-card.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MedicalCardService } from '../service/medical-cards.service';

@Injectable()
export class MedicalCardEffects {
  loadMedicalCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MedicalCardActions.loadList),
      mergeMap(() =>
        this.medicalCardService.getMedicalCardList().pipe(
          map((response) => MedicalCardActions.loadListSuccess({ medicalCards: response.medicalCards })),
          catchError((error) => of(MedicalCardActions.loadListFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private medicalCardService: MedicalCardService) {}
}
