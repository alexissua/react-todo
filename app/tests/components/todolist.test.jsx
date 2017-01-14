var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

//var TodoList = require('TodoList');
//var Todo = require('Todo');
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('Should exists', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do Something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    var store = configure({
      todos: todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    //var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todosList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });
});
