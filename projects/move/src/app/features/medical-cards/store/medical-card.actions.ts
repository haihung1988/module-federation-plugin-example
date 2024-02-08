import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { MedicalCard } from '../models/medical-card.model';

export const MedicalCardActions = createActionGroup({
  source: 'MedicalCard',
  events: {
    'Load list': emptyProps(),
    'Load list success': props<{ medicalCards: MedicalCard[] }>(),
    'Load list failure': props<{ error: string }>()
  }
});
