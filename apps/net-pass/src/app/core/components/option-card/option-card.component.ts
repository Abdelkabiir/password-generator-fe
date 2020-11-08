import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'net-pass-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {
  @Input() option = false;
  @Input() title = 'false';
  // @Output() value = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}

  // changeValue() {
  //   this.value.emit(!this.option)
  // }
}
