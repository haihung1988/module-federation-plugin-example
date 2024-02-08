import { Routes } from '@angular/router';
import { ROUTES_CONFIG } from './core/constants/routes.constant';
import { HealthTabComponent } from './features/health-tab-pages/health-tab-pages.component';
import { HealthContentDetailsPagesComponent } from './features/health-content/pages/health-content-details-pages/health-content-details-pages.component';
import { HealthContentSeeAllPagesComponent } from './features/health-content/pages/health-content-see-all-pages/health-content-see-all-pages.component';
import { MedicalCardDetailsPagesComponent } from './features/medical-cards/pages/medical-card-details-pages/medical-card-details-pages.component';
import { VasDetailsPagesComponent } from './features/vas/pages/vas-details-pages/vas-details-pages.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: ROUTES_CONFIG.HEALTH
  // },
  // {
  //   path: ROUTES_CONFIG.HEALTH_CONTENT,
  //   loadChildren: () => import('health-content').then((m) => m.HealthContentModule)
  // },
  {
    path: '',
    component: HealthTabComponent
  },
  {
    path: ROUTES_CONFIG.HEALTH_CONTENT_DETAILS,
    component: HealthContentDetailsPagesComponent
  },
  {
    path: ROUTES_CONFIG.HEALTH_CONTENT_SEE_ALL,
    component: HealthContentSeeAllPagesComponent
  },
  {
    path: ROUTES_CONFIG.MEDICAL_CARD_DETAILS,
    component: MedicalCardDetailsPagesComponent
  },
  {
    path: ROUTES_CONFIG.VAS_DETAILS,
    component: VasDetailsPagesComponent
  }
];
