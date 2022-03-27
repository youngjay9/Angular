import { Attribute, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-font',
  templateUrl: './app-font.component.html',
  styleUrls: ['./app-font.component.css']
})
export class AppFontComponent implements OnInit {

  private _color: string;


  constructor(@Attribute('color_init') public color: string) {
    this._color = color;
  }

  ngOnInit(): void {
  }

  // 從 parent component 傳遞近來的參數
  @Input() sizeParam!: number;

  // 從目前 AppFontComponent 回傳參數給 parent component
  @Output() sizeParamChange = new EventEmitter<number>();


  get get_color(): string {
    return this._color;
  }

  onSetFontSize(value: number) {
    this.sizeParam += value;
    this.sizeParamChange.emit(this.sizeParam);
  }

}
