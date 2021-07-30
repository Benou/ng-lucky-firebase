import { CourseCategory } from './course-category.enum';

export interface Course {
  id: number;
  description: string;
  longDescription: string;
  iconUrl: string;
  lessonsCount: number;
  categories: CourseCategory[];
  seqNo: number;
  url: string;
}
