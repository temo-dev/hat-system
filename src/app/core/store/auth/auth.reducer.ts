import * as AuthActions from './auth.action';

export interface AuthState {
  isLoading: boolean;
  username: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  username: '',
};

export function authReducer(
  state: AuthState = initialState,
  action: AuthActions.AuthActions
): AuthState {
  switch (action.type) {
    case AuthActions.LOGIN:
      return { ...state, isAuthenticated: true };
    default:
      return state;
  }
}
