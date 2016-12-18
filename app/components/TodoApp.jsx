var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
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
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  // En esta función recibimos el valor del input del hijo (text)::
  handleAddTodo: function(text){
    alert('New text: ' + text);
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
