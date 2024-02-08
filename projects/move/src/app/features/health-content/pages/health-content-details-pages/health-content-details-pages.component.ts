import { HttpClient } from '@angular/common/http';
import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { CdsIonButtonModule } from '@cds/ng-ionic-components/button';
import { CdsIonIconModule } from '@cds/ng-ionic-components/icon';
import { CdsIonTopBarModule } from '@cds/ng-ionic-components/top-bar';
import { Location } from '@angular/common';
import { CdsIconModule } from '@cds/ng-web-components/icon';

@Component({
  selector: 'mv-health-content-details-pages',
  standalone: true,
  imports: [CdsIonTopBarModule, CdsIonIconModule, CdsIonButtonModule, CdsIconModule],
  templateUrl: './health-content-details-pages.component.html',
  styleUrls: ['./health-content-details-pages.component.scss']
})
export class HealthContentDetailsPagesComponent implements OnInit, AfterContentChecked {
  @ViewChild('myFrame')
  myFrame!: ElementRef;

  url: string =
    'https://stg-ap.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html';
  urlSafe: SafeResourceUrl | undefined;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private location: Location,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    window.parent.postMessage('', '*');
  }

  onBack() {
    // let content = '<button id="button" class="button" >My button </button>';
    // let doc = this.myFrame.nativeElement.contentDocument || this.myFrame.nativeElement.contentWindow;
    // doc.querySelector('.p-right').addEventListener('click', this.onClick.bind(this));
    this.location.back();
  }
  onClick(event: any) {
    console.log(event);
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
