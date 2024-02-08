import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:

    {
      path: 'flights1',
      loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule)
    },

    {
      path: 'flights2',
      loadChildren: () => import('mfe2/Module').then(m => m.FlightsModule)
    },

    {
      path: 'move',
      loadChildren: () => import('move/Module').then(m => m.AppModule)
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

