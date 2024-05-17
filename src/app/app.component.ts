import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AppState } from './core/store/app.state';
import { Store, select } from '@ngrx/store';
import { isAuthSelector } from './core/store/auth/auth.selector';
import { Observable } from 'rxjs';
import { KasaComponent } from './kasa/kasa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    AdminComponent,
    AuthComponent,
    KasaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  isLoginned: boolean = false;
  vm$: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.vm$ = this.store.pipe(select(isAuthSelector));
  }

  ngOnInit(): void {
    this.vm$.subscribe((value) => (this.isLoginned = value));
  }
}
