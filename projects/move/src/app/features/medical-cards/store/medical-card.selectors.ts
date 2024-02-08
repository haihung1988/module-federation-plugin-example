import { createSelector } from '@ngrx/store';
import { IAppState } from '../../../core/store/store';
import { MedicalCardState } from './medical-card.reducer';

const feature = (state: IAppState) => state.medicalCard;

export const MedicalCardSelector = createSelector(feature, (state: MedicalCardState) => state.medicalCards);
