import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { StudyService } from './study.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef;
  @ViewChild('.search-suggestion-box') suggestionBox: ElementRef;

  dictionary: Array<string> = ['Hello', 'Hello World', 'Hello Mrs. Robbinson'];
  suggestions = new Array<string>();
  found = false;

  constructor(private studyService: StudyService) { }

  ngAfterViewInit() {
    const inputObs = Observable.fromEvent(this.input.nativeElement, 'input');

    inputObs.map((event: Event) => (<HTMLInputElement>event.target).value)
            .debounceTime(500)
            .subscribe((value: string) => {
              if (!value) {
                this.found = false;
              } else {
                this.search(value);
                this.found = true;
              }
            });
          }

  search(parameter) {
    this.studyService.searchList(parameter)
    .subscribe((results) => {
        this.suggestions = [];
        this.suggestions = results.query.search.slice(0, 5).map(res => res.title);
      });
  }

}
