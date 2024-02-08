import { createReducer, on } from '@ngrx/store';

import { HealthContent } from '../models/health-content.model';
import { HealthContentActions } from './health-content.actions';

export interface HealthContentState {
  healthContents: HealthContent[];
  loading: boolean;
  error: string;
}

export const initialState: HealthContentState = {
  healthContents: [],
  loading: false,
  error: ''
};

export const HealthContentReducer = createReducer(
  initialState,
  on(HealthContentActions.loadList, (state) => ({ ...state, loading: true })),
  on(HealthContentActions.loadListSuccess, (state, { healthContents }) => ({
    ...state,
    healthContents,
    loading: false
  })),
  on(HealthContentActions.loadListFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
