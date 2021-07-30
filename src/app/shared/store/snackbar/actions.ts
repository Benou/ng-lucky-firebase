import { createAction, props } from '@ngrx/store';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const show = createAction('[SNACKBAR] show', props<{ message: string, config?: MatSnackBarConfig }>());
export const dismiss = createAction('[SNACKBAR] dismiss');
