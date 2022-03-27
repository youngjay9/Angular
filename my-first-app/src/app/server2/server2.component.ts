import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  fontSize = 0;

  fontColor = "red";

  fontSizeType = 'middle';

  constructor() { }

  ngOnInit(): void {
  }

  onSetFontSize(value: number) {
    if (this.fontSize >= 0) {
      this.fontSize += value;
    }
  }

  get fontClass() {
    return this.fontSizeType + '-font';
  }


}
