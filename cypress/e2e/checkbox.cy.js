describe ('Realizando testes com checkbox', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('a', 'Checkboxes').click();
    })

    it('C1 - Desmarcar todos os checkboxes', () => {
        cy.get(':checkbox').uncheck();
        cy.get(':checkbox:first').check();
        cy.get(':checkbox:first').should('be.checked');
    })
})