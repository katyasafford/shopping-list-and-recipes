import { ShoppingListAndRecipesPage } from './app.po';

describe('shopping-list-and-recipes App', () => {
  let page: ShoppingListAndRecipesPage;

  beforeEach(() => {
    page = new ShoppingListAndRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
