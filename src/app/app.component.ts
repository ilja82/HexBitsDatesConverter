import {Component, Injectable} from '@angular/core';
import {NumberUtilsService} from './number-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable()
export class AppComponent {
  bits = '';

  constructor(private numberUtils: NumberUtilsService) {
  }

  updateBits(bits: string) {
    if (this.numberUtils.isBitsNumber(bits)) {
      this.bits = bits;
    }
  }

  updateHex(hex: string) {
    if (this.numberUtils.isHexNumber(hex)) {
      this.bits = this.numberUtils.hexToBits(hex);
    }
  }

}
