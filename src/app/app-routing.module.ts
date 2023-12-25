import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
{ path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
{ path: '', redirectTo: '/hotels', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
