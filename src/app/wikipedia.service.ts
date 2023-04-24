import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      wordcount: number;
      snippet: string;
      pageid: number;
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>('https://es.wikipedia.org/w/api.php', {
      params: {
        origin: '*',
        action: 'query',
        list: 'search',
        utf8: '1',
        srsearch: term,
        format: 'json'
      }
    })
    .pipe(map(response => response.query.search))
  }
}
