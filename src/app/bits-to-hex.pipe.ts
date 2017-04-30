import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {NumberUtilsService} from './number-utils.service';

@Pipe({
  name: 'bitsToHex'
})
@Injectable()
export class BitsToHexPipe implements PipeTransform {

  constructor(private numberUtils: NumberUtilsService) {
  }

  transform(value: string): string {
    return this.numberUtils.bitsToHex(value);
  }

}
