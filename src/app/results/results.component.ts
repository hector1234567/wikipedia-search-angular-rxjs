import { Component, Input } from '@angular/core';

interface WikipediaResult {
  title: string;
  wordcount: number;
  snippet: string;
  pageid: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() list: WikipediaResult[] = []
}
