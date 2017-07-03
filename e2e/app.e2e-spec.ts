import { HttpmodulePage } from './app.po';

describe('httpmodule App', () => {
  let page: HttpmodulePage;

  beforeEach(() => {
    page = new HttpmodulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
