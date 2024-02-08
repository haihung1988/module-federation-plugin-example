import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Vas } from '../models/vas.model';

export const VasActions = createActionGroup({
  source: 'Vas',
  events: {
    'Load list': emptyProps(),
    'Load list success': props<{ vas: Vas[] }>(),
    'Load list failure': props<{ error: string }>()
  }
});
