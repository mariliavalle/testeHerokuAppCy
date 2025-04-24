describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })

    it('Login correto', () => {
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
        //cy.get('#flash').should('be.visible');
        cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    })

    it('Login incorreto', () => {
        cy.get('.radius').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');
    })
})