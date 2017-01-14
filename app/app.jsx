// Importamos las librerías::
var React = require("react");
var ReactDOM = require("react-dom");

// El provider es el que nos ayuda a que los hijos accedan al store y puedan hacer
// dispatch tambien::
var {Provider} = require('react-redux');

//Route, Router, IndexRoute, hashHistory son variables que acceden a la propiedad de react-router::
//EJ: var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var TodoApp = require("TodoApp");

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

/*store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());*/

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Load CSS File::
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById("app")
);

/* ReactDOM.render(
  <TodoApp/>,
  document.getElementById("app");
); */
