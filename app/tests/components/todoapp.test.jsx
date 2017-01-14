var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var expect = require("expect");
var $ = require("jQuery");

var configureStore = require("configureStore");
//var TodoList = require("TodoList");
import TodoList from 'TodoList';
var TestUtils = require("react-addons-test-utils");

var TodoApp = require("TodoApp");

describe("TodoApp", () => {
  it('Should exists', () => {
    expect(TodoApp).toExist();
  });

  it('Should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
