import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../models/image';

@Pipe({
  name: 'firstUrlOfImages'
})
export class FirstUrlOfImagesPipe implements PipeTransform {

  transform(value: Image[], urlIfNotImage: string): string {
    return value && value.length > 0 ? value[0].url : urlIfNotImage;
  }

}
