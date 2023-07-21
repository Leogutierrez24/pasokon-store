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
    console.log("change just img => ", this.img);
  }

  @Input() public alt: string = "";

  @Output() public loaded = new EventEmitter<string>();

  public counter: number = 0;

  public counterFn: number | undefined;

  public imageDefault: string = "../../../assets/images/teclado-razer-blackwidow.jpeg";

  public imgError()
  {
    this.img = this.imageDefault;
  }

  public imgLoaded()
  {
    console.log("image loaded");
    this.loaded.emit(this.img);
  }
}
