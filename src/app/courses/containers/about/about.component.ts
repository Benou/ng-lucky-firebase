import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { State } from '../../../shared';
import * as CoursesActions from '../../../shared/store/courses/actions';
import * as CoursesSelectors from '../../../shared/store/courses/selectors';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.loading$ = this.store.select(CoursesSelectors.selectLoading).pipe(share());
  }

  populateDatabase() {
    this.store.dispatch(CoursesActions.populateDatabase());
  }
}
