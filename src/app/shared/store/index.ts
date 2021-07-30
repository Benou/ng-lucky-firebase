import { ActionReducerMap } from '@ngrx/store';

import { CoursesEffects } from './courses/effects';
import { SnackBarEffects } from './snackbar/effects';
import * as CoursesReducer from './courses/reducer';

export interface State {
  courses: CoursesReducer.State
}

export const reducers: ActionReducerMap<State> = {
  courses: CoursesReducer.reducer
};

export const effects = [CoursesEffects, SnackBarEffects];
