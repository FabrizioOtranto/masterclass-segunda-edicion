/// <reference types="cypress" />

export class HomePage {

    clickTodoList() {
        cy.get("#todolistlink").click()
    }
}