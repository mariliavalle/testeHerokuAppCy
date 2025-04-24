describe('Teste com dropdown', () => {
  beforeEach (() => {
    cy.visit('https://the-internet.herokuapp.com/');
  })
  
  
  it('Clicar na opção escolhida do dropdown', () => {
    cy.contains('a', 'Dropdown').click();
    cy.get('#dropdown').select('Option 1');
    cy.get('#dropdown option:selected').should('have.text', 'Option 1');

  })
})