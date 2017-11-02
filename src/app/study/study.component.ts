import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Rx';


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

  constructor() { }

  ngAfterViewInit() {
    const inputObs = Observable.fromEvent(this.input.nativeElement, 'input');

    inputObs.filter((event: Event) => (<HTMLInputElement>event.target).value.length > 1)
            .map((event: Event) => (<HTMLInputElement>event.target).value)
            .debounceTime(500)
            .subscribe((value: string) => {
              this.found = false;
              this.suggestions = [];
              this.dictionary.map((suggestion) => {
                if (suggestion.toLowerCase().includes(value)) {
                  this.suggestions.push(suggestion);
                  this.found = true;
                } else {
                  this.found = false;
                }
              });
            });
  }

}
