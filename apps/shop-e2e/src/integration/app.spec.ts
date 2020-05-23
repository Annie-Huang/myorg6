import { getGreeting, addItem, getShoppingCartStatus } from '../support/app.po';

describe('shop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display items', () => {
    getGreeting().contains('Welcome to shop!');
    addItem('blanket');
    getShoppingCartStatus().contains('1 item');
  });
});
