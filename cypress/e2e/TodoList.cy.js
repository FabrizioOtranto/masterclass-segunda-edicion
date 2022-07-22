import { AuthPage } from "../support/PageObjects/AuthPage"
import { HomePage } from "../support/PageObjects/HomePage"
import { TodoListPage } from "../support/PageObjects/TodoListPage"
describe('Todo list Fixture', () => {
  const authPage = new AuthPage()
  const homePage = new HomePage()
  const todoListPage = new TodoListPage()


  before("Iniciar la sesion", () =>{
    Cypress.session.clearAllSavedSessions()
    cy.loginConSesion()
  })

  beforeEach("deberia ingresar en el sistema y dirigirse a 'TodoList'", () => {
    cy.loginConSesion()
    cy.visit('https://pushing-front.vercel.app/')
    homePage.clickTodoList()
  })

  it("deberia ingresar una tarea a la lista", () => {
    const tarea1 = "Primer tarea"
    todoListPage.enviarTarea(tarea1)
    todoListPage.verificarTareaExistente(tarea1)
  })
  
  it("Deberia eliminar todas las tareas al clickear en 'Remove all'", () =>{
    const tarea1 = "Primer tarea"
    const tarea2 = "Segunda tarea"
    const tarea3 = "Tercer tarea"
    todoListPage.enviarTarea(tarea1)
    todoListPage.enviarTarea(tarea2)
    todoListPage.enviarTarea(tarea3)
    todoListPage.clickRemoveAll()
  })

  it("Deberia visaulizar solamente las tareas completadas en la pestaña 'Completed'", () =>{
    const tarea1 = "Primer tarea"
    const tarea2 = "Segunda tarea"
    todoListPage.enviarTarea(tarea1)
    todoListPage.enviarTarea(tarea2)
    todoListPage.completarTarea(tarea2)
    todoListPage.clickCompletedPestaña()
    todoListPage.verificarTareaExistente(tarea2)
  })


})