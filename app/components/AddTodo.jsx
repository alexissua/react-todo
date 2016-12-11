var React = require("react");

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    // Obtenemos el valor del input::
    var text = this.refs.text.value;

    if (text.length > 0){
      // Se lo pasamos como un prop a su padre::
      this.props.onAddTodo(text);
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
      <div>
        <form onSubmit={this.onSubmit} className="addtodo-form">
          <input type="text" ref="text" placeholder="What do you need to do?" />
          <button id="button-expanded" className="button expanded">Send</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
