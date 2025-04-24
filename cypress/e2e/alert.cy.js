describe('Testando Alertas JavaScript', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.contains('a', 'JavaScript Alerts').click();
    })

    it ('Alert JavaScript', () => {
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window.alert', (alertText) => {
            expect(alertText).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('have.text', 'You successfully clicked an alert');
    })

    it ('Clicar OK em confirmação no alerta JavaScript', () =>{
        cy.contains('button', 'Click for JS Confirm').click();
        // Intercepta o confirm para verificar o texto
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('I am a JS Confirm');
            // Simula o clique no OK
            return true;
        })
        cy.get('#result').should('have.text', 'You clicked: Ok');
    })

    it ('Clicar CANCEL em confirmação no alerta JavaScript', () =>{
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('I am a JS Confirm');
            // Simula o clique no Cancel
            return false;
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel');
    })


    it('Escrevendo no prompt alert', () => {
        // Pega o objeto window da página atual 
        cy.window().then(function(promptAlert) {
            // Intercepta o prompt para fornecer a resposta automaticamente
            cy.stub(promptAlert, 'prompt').returns('Hello, world!')
        })
        // Deve garantir que o prompt foi interceptado antes do clique acontecer
        cy.contains('button', 'Click for JS Prompt').click();
        cy.get('#result').contains('Hello, world!');
    })
})