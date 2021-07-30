import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Course } from '../../models';
import * as CoursesActions from './actions';

export interface State extends EntityState<Course> {
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  error: null
});

export const reducer = createReducer(
  initialState,
  on(CoursesActions.populateDatabase, state => ({ ...state, loading: true, error: null })),
  on(CoursesActions.populateDatabaseSuccess, state => ({ ...state, loading: false })),
  on(CoursesActions.populateDatabaseError, (state, { error }) => ({ ...state, loading: false, error }))
);

export const getLoading = (state: State): boolean => state.loading;
