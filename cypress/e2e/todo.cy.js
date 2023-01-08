/// <reference types = "cypress" />

import ToDoApi from "../api/toDoApi";
import UserApi from "../api/userApi";
import ToDoPage from "../pages/toDoPage";

describe("To do test cases", () => {
  let token;
  beforeEach(() => {
    UserApi.register().then((response) => {
      token = response.body.access_token;
    });
  });

  it("Should be able to add new todo", () => {
    new ToDoPage()
      .load()
      .clickOnTheAddButton()
      .addNewToDo("Practicing on cypress")
      .firstItemShouldHaveText("Practicing on cypress");
  });

  it("Should be able to mark todo as completed", () => {
    ToDoApi.add(token);
    new ToDoPage()
      .load()
      .markToDoAsCompleted()
      .firstItemShouldHaveBackGroundColor("rgb(33, 76, 97)");
  });
});
