import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { ActionComponent } from './components/action/action.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'result',
    component: ResultPageComponent
  },
  {
    path: 'action',
    component: ActionComponent
  },
  { path: 'entry',
   loadChildren:  () => import('./components/entry/entry.module').then(x => x.EntryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
