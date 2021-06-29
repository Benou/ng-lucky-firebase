import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() opened: boolean;
  @Output() openedChange: EventEmitter<boolean>;

  constructor() {
    this.opened = false;
    this.openedChange = new EventEmitter<boolean>();
  }

  logout(): void {

  }
}
