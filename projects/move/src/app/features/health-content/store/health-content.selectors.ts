import { createSelector } from '@ngrx/store';
import { HealthContentState } from './health-content.reducer';
import { IAppState } from 'src/app/core/store/store';

const feature = (state: IAppState) => state.healthContent;

export const HealthContentSelector = createSelector(feature, (state: HealthContentState) => state.healthContents);
