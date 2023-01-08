class ToDoApi {
  static add(token) {
    return cy.request({
      url: "/api/v1/tasks",
      method: "POST",
      auth: {
        bearer: token,
      },
      body: {
        isCompleted: false,
        item: "newly added item",
      },
    });
  }
}

export default ToDoApi;
