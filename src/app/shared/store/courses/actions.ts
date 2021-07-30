import { createAction, props } from '@ngrx/store';

export const populateDatabase = createAction('[COURSES] populateDatabase');
export const populateDatabaseSuccess = createAction('[COURSES] populateDatabaseSuccess');
export const populateDatabaseError = createAction('[COURSES] populateDatabaseError', props<{ error: string }>());
