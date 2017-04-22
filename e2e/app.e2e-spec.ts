import { HexBitsDatesConverterPage } from './app.po';

describe('hex-bits-dates-converter App', () => {
  let page: HexBitsDatesConverterPage;

  beforeEach(() => {
    page = new HexBitsDatesConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
