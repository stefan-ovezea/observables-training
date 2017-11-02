import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StudyService {
  constructor(private http: Jsonp) { }
  searchList(parameter) {
    // const listSearchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=JSONP_CALLBACK&search=${parameter}`;

    // tslint:disable-next-line:max-line-length
    const listSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${parameter}&utf8=&format=json&callback=JSONP_CALLBACK`;
    return this.http.get(listSearchUrl)
      .map(res => {
        return res.json();
      });
  }

}
