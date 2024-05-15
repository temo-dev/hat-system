import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

const featureAuth = createFeatureSelector<AuthState>('feature_auth');

export const isAuthSelector = createSelector(
  featureAuth,
  (state) => state.isAuthenticated
);
