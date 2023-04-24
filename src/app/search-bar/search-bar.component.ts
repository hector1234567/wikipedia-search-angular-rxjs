import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  onInput(searchTerm: string) {
    this.term = searchTerm;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
