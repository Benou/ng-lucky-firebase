import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Course } from '../../../shared';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  /*courses$: Observable<Course[]>;
  beginnersCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;*/

  constructor(private router: Router) {}
}
