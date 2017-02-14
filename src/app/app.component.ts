import { Component } from '@angular/core';

@Component({
  selector: 'prexp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  year = (new Date()).getFullYear();
}
