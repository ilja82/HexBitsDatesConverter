import { BitsToHexPipe } from './bits-to-hex.pipe';

describe('BitsToHexPipe', () => {
  it('create an instance', () => {
    const pipe = new BitsToHexPipe();
    expect(pipe).toBeTruthy();
  });
});
