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
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filterTodos = todos;

    //Filter by showClompleted
    // La función filter se ejecuta a cada elemento en el array, es recursiva::
    filterTodos = filterTodos.filter((todo) => {
      if ((todo.completed === false) || (showCompleted === true))
        return todo;
    });

    //Filter by searchText
    if (searchText.length > 0){
      filterTodos = filterTodos.filter((todo) => {
        if ((todo.text.toLowerCase().indexOf(searchText) > -1) || (searchText.length === 0))
          return todo;
      });
    }


    //Sort todos with non-completed first:
    filterTodos.sort((a, b) => {
      // Return -1 a debe de ir antes de b
      // Return 1 a debe de ir despues de b
      // Return 0, a y b son iguales

      if ((a.completed === false) && (b.completed === true)){
        return -1;
      }else if ((a.completed === true) && (b.completed === false)){
        return 1;
      }else{
        return 0;
      }

    });

    return filterTodos;
  }
};
