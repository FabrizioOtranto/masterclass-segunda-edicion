import './commands'

Cypress.Commands.add("loginConSesion", () =>{
    cy.session([], () => {
        cy.request({
            method: 'POST',
            url: 'https://pushing-it-backend.herokuapp.com/api/login',
            body: { "username": "pushingit", "password": "123456!" },
          }).then(({ body }) => {
            window.localStorage.setItem('token', body.token)
            window.localStorage.setItem('user', body.user.username)
          })
    })
})