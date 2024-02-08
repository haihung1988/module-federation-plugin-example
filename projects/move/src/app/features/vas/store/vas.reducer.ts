import { createReducer, on } from '@ngrx/store';

import { Vas } from '../models/vas.model';
import { VasActions } from './vas.actions';

export interface VasState {
  vas: Vas[];
  loading: boolean;
  error: string;
}

export const initialState: VasState = {
  vas: [],
  loading: false,
  error: ''
};

export const VasReducer = createReducer(
  initialState,
  on(VasActions.loadList, (state) => ({ ...state, loading: true })),
  on(VasActions.loadListSuccess, (state, { vas }) => ({
    ...state,
    vas,
    loading: false
  })),
  on(VasActions.loadListFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
