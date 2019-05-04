import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from './../../../utils/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string): Promise<string> {
    const path: string = 'assets/img/' + image + '.png';
    return Utils.imageExists(path).
      then((result) => {
        if (result) {
          return path;
        } else {
          return 'assets/img/placeholder.png';
        }
      });
  }
}
