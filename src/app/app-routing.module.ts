import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './@shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
