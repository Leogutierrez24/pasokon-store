import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

export class ImgComponent {
  public img: string = "";

  @Input("img")
  set changeImg(value: string)
  {
    this.img = value;
  }

  @Output() loaded = new EventEmitter();

  public imageDefault: string = "../../../assets/images/teclado-razer-blackwidow.jpeg";

  public imgError()
  {
    this.img = this.imageDefault;
  }

  public imgLoaded()
  {
    this.loaded.emit(this.img);
  }
}
