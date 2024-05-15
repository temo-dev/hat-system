import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducer';

@NgModule({
  imports: [StoreModule.forFeature('feature_auth', authReducer)],
})
export class CoreModule {}
