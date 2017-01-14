var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

// This is the way of calling the default (the one connected to the store)::
//var AddTodo = require('AddTodo');
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exists', () => {
    expect(AddTodo).toExist();
  });

  it('Should dispatch ADD_TODO when valid todo text', () => {
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    // Simulamos de que se le está pasando algo al AddTodo::
    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  // it('Should not call onAddTodo prop when invalid input', () => {
  //   var todoText = 'Check mail';
  //   var spy = expect.createSpy();
  //   var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
  //   var $el = $(ReactDOM.findDOMNode(addTodo));
  //
  //   // Simulamos de que se le está pasando algo al AddTodo::
  //   addTodo.refs.text.value = todoText;
  //   TestUtils.Simulate.submit($el.find('form')[0]);
  //
  //   expect(spy).toNotHaveBeenCalled(todoText);
  // });

});
