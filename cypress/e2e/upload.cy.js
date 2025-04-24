describe('Realizar upload de arquivos', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('a', 'File Upload').click();
    })

    it('Realizar upload de arquivo', () => {
        cy.get('#file-upload').selectFile('error.png');
        cy.get('#file-submit').click();
        cy.get('#uploaded-files').contains('error.png');
    })

    it('Erro ao realizar o upload de nenhum arquivo', () => {
        cy.get('#file-submit').click();
        cy.get('h1').should('have.text', 'Internal Server Error');
    })
})