
import {COURSES, findLessonsForCourse} from './db-data';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyD5nCk9IJrxYn7fGA25ZdebFX-obx44wIk",
  authDomain: "ng-lucky-firebase.firebaseapp.com",
  projectId: "ng-lucky-firebase",
  storageBucket: "ng-lucky-firebase.appspot.com",
  messagingSenderId: "185872122056",
  appId: "1:185872122056:web:dcc02d8c125f9b84c065fd"
};

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(config));

console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");

// @ts-ignore
const app = firebase.initializeApp(config);
// @ts-ignore
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function uploadData() {
  const courses = await db.collection('courses');
  for (let course of Object.values(COURSES)) {
    const newCourse = removeId(course);
    const courseRef = await courses.add(newCourse);
    const lessons = await courseRef.collection('lessons');
    const courseLessons = findLessonsForCourse(course['id']);
    console.log(`Uploading course ${course['titles']["description"]}`);
    for (const lesson of courseLessons) {
      const newLesson = removeId(lesson);
      await lessons.add(newLesson);
    }
  }
}

function removeId(data: any) {
  const newData: any = {...data};
  delete newData.id;
  return newData;
}

async function main(){
  try {
    console.log('Start main...\n\n');
    await uploadData();
    console.log('\n\nClosing Application...');
    await app.delete();
  }catch (e) {
    console.log('Data upload failed, reason:', e, '\n\n');
  }
}
