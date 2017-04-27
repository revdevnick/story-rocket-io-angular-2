import { StoryRocketIoPage } from './app.po';

describe('story-rocket-io App', () => {
  let page: StoryRocketIoPage;

  beforeEach(() => {
    page = new StoryRocketIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
