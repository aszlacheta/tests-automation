describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
});

describe('My Second Test', () => {
    it('Does do much!', () => {
        cy.visit('/');
        cy.get('input.name').type('abc');
        cy.get('input.surname').type('xyz');
        cy.get('#results').should('contain', 'Name: abcSurname: xyz');
    })
});