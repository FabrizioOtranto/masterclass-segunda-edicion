/// <reference types="cypress" />

export class AuthPage {
    
    toggleScreen(){
        cy.get('#registertoggle').dblclick()
    }

    escribirUsuario(usuario) {
        cy.get('#user').type(usuario)
    }

    escribirContraseña(password) {
        cy.get('#pass').type(password)
    }

    submitForm() {
        cy.get("#submitForm").click()
    }

}