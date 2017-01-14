var React = require("react");
var {connect} = require("react-redux");

//var Todo = require("Todo");
import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function(){

    // Como el TodoApp ya no pasa la lista de todos,
    // esta está vacía. Hay que indicarle como hacerlo con {connect}
    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {

      if(todos.length === 0){
        return (
          <p className="container__message">Nothing to do... Yet</p>
        )
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
      /* return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      }); */
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

// Connect se ejecuta luego de que el componente ha sido creado::
export default connect(
  (state) => {
    return state;
  }
)(TodoList);

/* export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);*/

/*module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);*/
