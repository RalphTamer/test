import { EcommerceAppPage } from './app.po';

describe('ecommerce-app App', () => {
  let page: EcommerceAppPage;

  beforeEach(() => {
    page = new EcommerceAppPage();
  });


  //rerfe
  //branch 1 fejaifoeasflew
  it('should display message saying app works', () => {
    //JESCARDD
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
