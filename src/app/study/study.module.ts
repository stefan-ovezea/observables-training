import { StudyRoutingModule } from './study-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';

import { StudyComponent } from './study.component';
import { StudyService } from './study.service';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    StudyRoutingModule
  ],
  declarations: [
    StudyComponent
  ],
  providers: [
    StudyService
  ]
})
export class StudyModule { }
