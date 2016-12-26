var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it('Should exists', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state o handleAddTodo', () => {
    var dummyText = 'test test';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(dummyText);

    expect(todoApp.state.todos[0].text).toBe(dummyText);
    expect(todoApp.state.todos[0].createdAt).toBe(number);
  });
});
