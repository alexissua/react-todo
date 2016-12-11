// Importamos las librerías::
var React = require("react");
var ReactDOM = require("react-dom");

//Route, Router, IndexRoute, hashHistory son variables que acceden a la propiedad de react-router::
//EJ: var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var TodoApp = require("TodoApp");


// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Load CSS File::
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <TodoApp />,
    document.getElementById("app")
);
