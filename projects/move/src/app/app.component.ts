import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CdsIonBottomBarConfig, CdsIonBottomBarModule } from '@cds/ng-ionic-components/bottom-bar';
import { CdsButtonModule } from '@cds/ng-web-components/button';
import { HealthContentComponent } from './features/health-content/components/health-content-component/health-content.component';
import { PromoBannerComponent } from './features/promo-banner/promo-banner.component';
import { CdsLangPipe } from '@cds/ng-core/lang';
@Component({
  selector: 'mv-app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, IonicModule, CdsIonBottomBarModule, CdsButtonModule],
  providers: [HealthContentComponent, PromoBannerComponent, CdsLangPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'health-vn-web-app';

  config: CdsIonBottomBarConfig[] = [
    {
      label: 'MOVE',
      icon: 'action:MOVE_thick',
      router: 'move'
    },
    {
      label: 'CWS',
      icon: 'form:document',
      router: 'cws'
    },
    {
      label: 'PWS',
      icon: 'health:active',
      router: 'pws'
    },
    {
      label: 'eClaims',
      icon: 'health:health',
      router: 'claims'
    },
    {
      label: 'Settings',
      icon: 'action:hamburger',
      router: 'settings'
    }
  ];
}
