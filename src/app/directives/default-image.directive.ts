import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[defaultImage]',
  host: {
    '[src]': 'checkPath(src)',
    '(error)': 'onError()'
  }
})
export class DefaultImageDirective {

  @Input() src: string;
  public defaultImg: string = 'http://lamp.oja.go.th/medianewsIMG/default-image.png';

  constructor() {}

  public onError() {
    this.src = this.defaultImg;
  }
  public checkPath(src) {
    return src ? src : this.defaultImg;
  }

}
