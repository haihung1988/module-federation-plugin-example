import { createReducer, on } from '@ngrx/store';
import { MedicalCardActions } from './medical-card.actions';
import { MedicalCard } from '../models/medical-card.model';

export interface MedicalCardState {
  medicalCards: MedicalCard[];
  loading: boolean;
  error: string;
}

export const initialState: MedicalCardState = {
  medicalCards: [],
  loading: false,
  error: ''
};

export const MedicalCardReducer = createReducer(
  initialState,
  on(MedicalCardActions.loadList, (state) => ({ ...state, loading: true })),
  on(MedicalCardActions.loadListSuccess, (state, { medicalCards }) => ({
    ...state,
    medicalCards,
    loading: false
  })),
  on(MedicalCardActions.loadListFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
