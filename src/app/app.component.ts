import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface WikipediaResult {
  title: string;
  wordcount: number;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: WikipediaResult[] = [];

  constructor(private wikipediaService: WikipediaService) {}

  onSubmitted(term: string) {
    this.wikipediaService.search(term)
    .subscribe((result)=> {
      this.results = result;
    })
  }
}
