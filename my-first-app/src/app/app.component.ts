import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-title';
  name = 'jay';

  fontSize = 12;

  onSizeParamChange(sizeParam: number) {
    this.fontSize = sizeParam;
  }

}
