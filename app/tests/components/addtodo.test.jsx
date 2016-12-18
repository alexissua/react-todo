var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Should exists', () => {
    expect(AddTodo).toExist();
  });

  it('Should call onAddTodo prop with valid data', () => {
    var todoText = 'Check mail';
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    // Simulamos de que se le está pasando algo al AddTodo::
    addTodo.refs.text.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);


    expect(spy).toHaveBeenCalledWith(todoText);
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
