import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  //you can also directly use style by following below
  styles:[`
  h1{
    color:dodgerblue;
  }
  `]
})
export class AppComponent {
  title = 'my-first-app';
}
