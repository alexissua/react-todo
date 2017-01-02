var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var response = actions.setSearchText(action.searchText);
    expect(response).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'That thing you do'
    };

    var response = actions.addTodo(action.text);
    expect(response).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };

    var response = actions.toggleTodo(action.id);
    expect(response).toEqual(action);
  });
});
