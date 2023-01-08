import NewToDoPage from "./newToDoPage";

class ToDoPage {
  get welcomeMessage() {
    return cy.get('[data-testid="welcome"]');
  }
  get addButton() {
    return cy.get('[data-testid="add"]');
  }
  get firstToDoItem() {
    return cy.get(':nth-child(3) > [data-testid="todo-text"]');
  }

  get firstToDoCheckBox() {
    return cy.get('[data-testid="complete-task"]').eq(0);
  }

  get firstCheckedToDo() {
    return cy.get(".sc-bjUoiL > :nth-child(3)").eq(0);
  }

  load() {
    cy.visit("/todo");
    return this;
  }

  clickOnTheAddButton() {
    this.addButton.click();
    return new NewToDoPage();
  }
  messageShouldBeVisible() {
    this.welcomeMessage.should("be.visible");
    return this;
  }

  firstItemShouldHaveText(text) {
    this.firstToDoItem.should("have.text", text);
    return this;
  }

  markToDoAsCompleted() {
    this.firstToDoCheckBox.click();
    return this;
  }

  firstItemShouldHaveBackGroundColor(color) {
    this.firstCheckedToDo.should("have.css", "background-color", color);
    return this;
  }
}
export default ToDoPage;
