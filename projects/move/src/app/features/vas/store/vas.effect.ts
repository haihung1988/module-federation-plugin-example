import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import { VasActions } from './vas.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { VasService } from '../service/vas.service';

@Injectable()
export class VasEffects {
  loadVas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VasActions.loadList),
      mergeMap(() =>
        this.vasService.getVasList().pipe(
          map((response) => VasActions.loadListSuccess({ vas: response.medicalCards })),
          catchError((error) => of(VasActions.loadListFailure({ error: error.message })))
        )
      )
    )
  );
  constructor(private actions$: Actions, private vasService: VasService) {}
}
