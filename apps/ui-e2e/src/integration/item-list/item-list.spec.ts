describe('ui: ItemList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=itemlist--primary&knob-items&knob-addToCart'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui!');
    });
});
