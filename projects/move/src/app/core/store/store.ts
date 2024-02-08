import { ActionReducer, Action } from '@ngrx/store';
import { HealthContentEffects } from '../../features/health-content/store/health-content.effect';
import { HealthContentReducer, HealthContentState } from '../../features/health-content/store/health-content.reducer';
import { MedicalCardReducer, MedicalCardState } from '../../features/medical-cards/store/medical-card.reducer';
import { MedicalCardEffects } from '../../features/medical-cards/store/medical-card.effect';
import { VasReducer, VasState } from '../../features/vas/store/vas.reducer';
import { VasEffects } from '../../features/vas/store/vas.effect';

export interface IAppState {
  healthContent: HealthContentState;
  medicalCard: MedicalCardState;
  vas: VasState;
}

export interface IAppStore {
  healthContent: ActionReducer<HealthContentState, Action>;
  medicalCard: ActionReducer<MedicalCardState, Action>;
  vas: ActionReducer<VasState, Action>;
}

export const AppStore: IAppStore = {
  healthContent: HealthContentReducer,
  medicalCard: MedicalCardReducer,
  vas: VasReducer
};

export const appEffects = [HealthContentEffects, MedicalCardEffects, VasEffects];
