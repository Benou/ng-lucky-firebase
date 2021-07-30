import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import { CourseService } from '../../services';
import * as CoursesActions from './actions';
import * as SnackBarActions from '../snackbar/actions';

@Injectable()
export class CoursesEffects {
  populateDatabase$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.populateDatabase),
      switchMap(() =>
        this.courseService.populateDatabase().pipe(
          mergeMap(() => [
            CoursesActions.populateDatabaseSuccess(),
            SnackBarActions.show({ message: 'Opération réussie !' })
          ]),
          catchError(error => [
            CoursesActions.populateDatabaseError({ error }),
            SnackBarActions.show({ message: 'Oups... Une erreur est survenue !' })
          ])
        )
      )
    )
  );

  constructor(private actions$: Actions, private courseService: CourseService) {}
}
