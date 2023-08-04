import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent {
  @Input() public img = "";

  @Output() loaded = new EventEmitter();

  public imageDefault = "../../../assets/images/teclado-razer-blackwidow.jpeg";

  public imgError()
  {
    this.img = this.imageDefault;
  }

  public imgLoaded()
  {
    this.loaded.emit(this.img);
  }
}
