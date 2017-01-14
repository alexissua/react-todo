var React = require("react");
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;

    // Obtenemos el valor del input::
    var text = this.refs.text.value;

    if (text.length > 0){
      // Se lo pasamos como un prop a su padre::
      dispatch(actions.addTodo(text));
      this.refs.text.value = "";
    }else {
      this.refs.text.focus();
      /*
      text = "Introduzca algún texto por favor...";
      this.props.onSetTodoText(text);
      this.refs.text.value = "";
      */
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="text" placeholder="What do you need to do?" />
          <button id="button-expanded" className="button expanded">Send</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
//module.exports = AddTodo;
