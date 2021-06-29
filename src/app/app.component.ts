import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidenavOpened: boolean;

  constructor(private db: AngularFirestore) {
    this.sidenavOpened = false;
  }

  ngOnInit(): void {
    this.db.collection('courses').stateChanges()
      .subscribe(snaps => {
        const courses = snaps.map(snap => ({ id: snap.payload.doc.id, ...(snap.payload.doc.data() as {}) }));
        console.log(courses);
      })
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  onSidenavOpenedChange(opened: boolean): void {
    this.sidenavOpened = opened;
  }
}
