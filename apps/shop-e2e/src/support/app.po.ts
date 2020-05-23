export const getGreeting = () => cy.get('h1');

export const addItem = (code: string) => cy.get(`button[item-code = "${code}"]`)

export const getShoppingCartStatus = () => cy.get(`div.cart`);
