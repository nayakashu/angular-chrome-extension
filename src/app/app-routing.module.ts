import { NgModule } from '@angular/core';


import { EventPageComponent } from './event-page/event-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PopupComponent } from './popup/popup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'event-page', component: EventPageComponent },
  { path: 'popup', component: PopupComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
    imports: [
      /**
       * The useHash setting for router module enables routing in old-fashioned way,
       * using the # sign. For example, to open our app routed to the Popup component,
       * we need to use the following URL address:
       * chrome-extension://[extension-id]/index.html#/popup
       */
      RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
