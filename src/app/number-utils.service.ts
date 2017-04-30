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
      result += parseInt(part, 16).toString(2);
    }

    return result;
  }

  bitsToHex(value: string) {
    const parts = value.match(/[\s\S]{1,4}/g) || [];

    let result = '';
    for (const part of parts) {
      result += parseInt(part, 2).toString(16);
    }

    return result;
  }

}
