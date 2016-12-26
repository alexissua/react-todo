var $ = require("jquery");

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      //LocalStorage solo guarda strings.
      //Convertimos el array en un JSON stringify::
      localStorage.setItem('todos', JSON.stringify(todos));

      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(stringTodos);
    }catch(error){

    }

    //return $.isArray(todos) ? todos : [];

    if ($.isArray(todos)){
      return todos;
    }else{
      return [];
    }
  }
};
