import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMovieList = false;
  movie = [];

  onToggleDetails() {
    this.showMovieList = !this.showMovieList;
    this.movie.push(this.movie.length + 1);
  }
}
