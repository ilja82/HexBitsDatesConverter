import {Injectable} from '@angular/core';

@Injectable()
export class NumberUtilsService {

  constructor() { }

  isBitsNumber(bits: string) {
    return /^[0-1]+$/.test(bits);
  }

  isHexNumber(hex: string) {
    return /^[0-9A-Fa-f]+$/.test(hex);
  }

  hexToBits(hex: string): string {
    let result = '';
    for (const part of hex) {
      let bits = parseInt(part, 16).toString(2);
      bits = this.expandBitsLeft(bits);
      result += bits;
    }

    return result;
  }

  bitsToHex(value: string) {
    const parts = value.match(/[\s\S]{1,4}/g) || [];

    let result = '';
    for (let part of parts) {
      part = this.expandBitsRight(part);
      result += parseInt(part, 2).toString(16);
    }

    return result;
  }

  expandBitsRight(bits) {
    return (bits + '000').substr(0, 4);
  }

  expandBitsLeft(bits) {
    return ('000' + bits).substr(-4);
  }

}
