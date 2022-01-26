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
  showSecret=false;
  log=[];
  str="";
  logValue=0;
  title = 'my-first-app';

  onClickButton()
  {
    
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
    this.showSecret=!this.showSecret; 
  }
}
