/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        cy.get('input[type="text"]').clear().type('Fulano')
        cy.get('input[type="email"]').clear().type('fulano@email.com')
        cy.get('input[type="tel"]').clear().type('12934567891')

        cy.get('.adicionar').click()
    })

    it('Deve alterar o nome de um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('GIANSOUZA')
        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').contains('GIANSOUZA')

        cy.screenshot('edicao-nome-contato')
    })

    it('Deve alterar o email de um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear().type('giansouza@ebac.com.br')
        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').contains('giansouza@ebac.com.br')

        cy.screenshot('edicao-email-contato')
    })
    
    it('Deve alterar o telefone de um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="tel"]').clear().type('11111111111')
        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').contains('11111111111')

        cy.screenshot('edicao-telefone-contato')
    }) 

    it('Deve deletar um contato existente', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
        cy.get(':nth-child(3) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').contains('Bruna').not()
    }) 

})