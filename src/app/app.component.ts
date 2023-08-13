import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // vista que esta asociada al componente
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public imgParent = "";

  public showImage = true;

  public onLoaded(img: string)
  {
    console.log("Log del padre", img);
  }

  public ToggleImage()
  {
    this.showImage = !this.showImage;
  }
}
