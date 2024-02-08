import { createSelector } from '@ngrx/store';
import { VasState } from './vas.reducer';
import { IAppState } from '../../../core/store/store';

const feature = (state: IAppState) => state.vas;

export const VasSelector = createSelector(feature, (state: VasState) => state.vas);
