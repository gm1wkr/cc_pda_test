describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should display the result of a calculation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })
  
  it('should chain multiple calculations', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '49')
  })
  
  it('should handle large numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-40000000')
  })

  it('should handle decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.3333333333333333');
  })

  it('should print error on division by zero', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error!');
  })
})