import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { CoursesRoutingModule } from './courses-routing.module';
import { AboutComponent, CoursesComponent } from './containers';

@NgModule({
  declarations: [
    CoursesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class CoursesModule {}
