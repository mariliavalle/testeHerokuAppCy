describe('Adicionando e removendo elementos da página', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('a', 'Add/Remove Elements').click();
    })

    it('C1 - Adicionar elementos da tela', () => {
        cy.addElement();
    })

    it('C2 - Remover elementos da tela', () => {
        cy.addElement();
        cy.get('.added-manually').click();
        cy.get('.added-manually').should('not.exist');
    })
})