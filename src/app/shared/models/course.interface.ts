import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

import { CourseCategory } from './course-category.enum';

export interface Course {
  id: string;
  description: string;
  longDescription: string;
  url: string;
  iconUrl: string;
  lessonsCount: number;
  categories: CourseCategory[];
  seqNo: number;
  promo: boolean;
  promoStartAt: Timestamp
}
