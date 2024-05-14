import { Routes } from '@angular/router';
import { OverViewComponent } from './pages/over-view/over-view.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'over-view' },
  { path: 'over-view', component: OverViewComponent },
  { path: 'dash-board', component: DashBoardComponent },
];
