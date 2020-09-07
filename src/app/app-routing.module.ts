import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { ActionComponent } from './pages/action/action.component';

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
   loadChildren:  () => import('./pages/entry/entry.module').then(x => x.EntryModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
