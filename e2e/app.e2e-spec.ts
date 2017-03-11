import { GameWebsiteAppPage } from './app.po';

describe('game-website-app App', function() {
  let page: GameWebsiteAppPage;

  beforeEach(() => {
    page = new GameWebsiteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
