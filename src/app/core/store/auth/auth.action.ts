import { ActionType, createAction, props } from '@ngrx/store';

export interface User {
  username: string;
  password: string;
}

export const LOGIN = '@Auth/Login';

export const login = createAction(LOGIN, props<{ user: User }>());

export type AuthActions = ActionType<typeof login>;
