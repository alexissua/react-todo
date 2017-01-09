var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return state = true;
    default:
      return state;
  };
};

export var todosReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
          if (todo.id === action.id){
            // El map devuelve un objeto::
            return {
              ...todo,
              // Si el estado es falso se pone en true o viceversa::
              completed: !todo.completed,
              completedAt: !todo.completed ? moment().unix() : undefined
            };
          }
      });
    default:
      return state;
  }
};
