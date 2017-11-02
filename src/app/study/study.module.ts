import { StudyRoutingModule } from './study-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyComponent } from './study.component';

@NgModule({
  imports: [
    CommonModule,
    StudyRoutingModule
  ],
  declarations: [
    StudyComponent
  ]
})
export class StudyModule { }
