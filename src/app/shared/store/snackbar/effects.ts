import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { concatMap, map } from 'rxjs/operators';

import * as SnackBarActions from './actions';

const defaultConfig: MatSnackBarConfig = {
  duration: 3000
};

@Injectable()
export class SnackBarEffects {
  show$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnackBarActions.show),
      concatMap(({ message, config }) =>
        this.snackbar.open(message, undefined, { ...defaultConfig, ...config }).afterDismissed().pipe(
          map(() => SnackBarActions.dismiss())
        )
      )
    )
  );

  constructor(private actions$: Actions, private snackbar: MatSnackBar) {}
}
