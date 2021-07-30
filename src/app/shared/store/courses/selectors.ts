import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as CoursesReducer from './reducer';

const coursesState = createFeatureSelector<CoursesReducer.State>('courses');

export const selectLoading = createSelector(coursesState, CoursesReducer.getLoading);
