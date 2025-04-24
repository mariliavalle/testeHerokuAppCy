describe('Realizar teste com inputs dinâmicos', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/inputs');
    })

    it('Inserir número em input dinâmico', () => {
        cy.get('input').type('4');
        cy.get(':number:valuetext').should('have.text', '4');
    })
})

