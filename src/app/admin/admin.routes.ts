import { Routes } from '@angular/router';
import { OverViewComponent } from './pages/over-view/over-view.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { KasaComponent } from './pages/kasa/kasa.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kasa' },
  { path: 'over-view', component: OverViewComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'kasa', component: KasaComponent },
];
