import { Component } from '@angular/core';
import { routerTransition } from './router-transition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {
  title = 'app';

  onAttach(event) {
    console.log(event);
  }
}
