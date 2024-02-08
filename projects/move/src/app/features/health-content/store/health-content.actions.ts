import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { HealthContent } from '../models/health-content.model';

export const HealthContentActions = createActionGroup({
  source: 'HealthContent',
  events: {
    'Load list': emptyProps(),
    'Load list success': props<{ healthContents: HealthContent[] }>(),
    'Load list failure': props<{ error: string }>()
  }
});
