import { HexBitsDatesConverterPage } from './app.po';

describe('hex-bits-dates-converter App', () => {
  let page: HexBitsDatesConverterPage;

  beforeEach(() => {
    page = new HexBitsDatesConverterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
