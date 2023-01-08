import ToDoPage from "./toDoPage";

class NewToDoPage {
  get newToDoInput() {
    return cy.get('[data-testid="new-todo"]');
  }

  get submitNewToDo() {
    return cy.get('[data-testid="submit-newTask"]');
  }

  load() {
    cy.visit("/todo/new");
    return this;
  }

  addNewToDo(item) {
    this.newToDoInput.type(item);
    this.submitNewToDo.click();
    return new ToDoPage();
  }
}
export default NewToDoPage;
