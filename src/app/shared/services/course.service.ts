import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import { COURSES, findLessonsForCourse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private db: AngularFirestore) {}

  populateDatabase(): Observable<void> {
    return from(new Promise<void>(async (resolve, reject) => {
      try {
        const courses = Object.values<{ id: number }>(COURSES);

        for (let course of courses) {
          const ref = await this.db.collection('courses').add(this.removeIds(course));
          const lessons = findLessonsForCourse(course.id);

          for (let lesson of lessons) {
            await ref.collection('lessons').add(this.removeIds(lesson));
          }
        }

        resolve();
      } catch (err) {
        reject('Error: populateDatabase()');
      }
    }));
  }

  private removeIds<T extends { id: number, courseId?: number }>(entity: T): Omit<T, 'id' | 'courseId'> {
    const { id, courseId, ...attrs } = entity;
    return { ...attrs };
  }
}
