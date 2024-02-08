import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { CdsIonButtonModule } from '@cds/ng-ionic-components/button';
import { CdsIonIconModule } from '@cds/ng-ionic-components/icon';
import { CdsIonTopBarModule } from '@cds/ng-ionic-components/top-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'mv-health-content-see-all-pages',
  standalone: true,
  imports: [CdsIonTopBarModule, CdsIonIconModule, CdsIonButtonModule],
  templateUrl: './health-content-see-all-pages.component.html',
  styleUrls: ['./health-content-see-all-pages.component.scss']
})
export class HealthContentSeeAllPagesComponent implements AfterContentChecked {
  constructor(private location: Location, private changeDetector: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  onBack() {
    this.location.back();
  }
}
