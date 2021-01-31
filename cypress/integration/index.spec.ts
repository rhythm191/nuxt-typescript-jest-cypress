/// <reference types="cypress" />

describe('index', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('page status', () => {
    it("contian 'nuxt-typescript-jest-cypress'", () => {
      cy.get('h1').should('contain', 'nuxt-typescript-jest-cypress')
    })

    it('show links', () => {
      cy.get('.links').should('contain', 'Documentation')
      cy.get('.links').should('contain', 'GitHub')
    })
  })
})
