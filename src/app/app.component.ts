import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test';

  test1(){
    console.log('primer commit')
  }

  test2(){
    console.log('branch 3')
  }

}

