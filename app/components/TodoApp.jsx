var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      todos: [
        {
          id: 1,
          text: 'Walk the fucking dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Fuck the society'
        }
      ]
    };
  },
  // En esta función recibimos el valor del input del hijo (text)::
  handleAddTodo: function(text){
    alert('New text: ' + text);
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
