import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidenavOpened: boolean;

  constructor() {
    this.sidenavOpened = false;
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  onSidenavOpenedChange(opened: boolean): void {
    this.sidenavOpened = opened;
  }
}
