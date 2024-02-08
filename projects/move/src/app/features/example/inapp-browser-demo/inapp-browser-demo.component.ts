import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdsButtonModule } from '@cds/ng-web-components/button';

@Component({
  selector: 'mv-inapp-browser-demo',
  standalone: true,
  imports: [CommonModule, CdsButtonModule],
  templateUrl: './inapp-browser-demo.component.html',
  styleUrls: ['./inapp-browser-demo.component.scss']
})
export class InappBrowserDemoComponent {
  openInAppBrowser() {
    // InAppBrowser.addListener('urlChangeEvent', (res) => {
    //   console.log('urlChangeEvent :>> ' + res.url);
    // }).then((res) => {
    //   console.log('urlChangeEvent :>> 2');
    // });
    // InAppBrowser.openWebView({
    //   url: 'https://www.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html'
    // });
  }

  openExternalBrowser() {
    // InAppBrowser.openBrowser({
    //   url: 'https://www.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html'
    // });
  }

  openExtensionBrowser() {
    // InAppBrowser.openBrowserExtension({
    //   url: 'https://www.manulife.com.vn/content/experience-fragments/insurance/vietnam/lead-form-experience-fragment-move/en-move-redemption.html'
    // });
  }
}
