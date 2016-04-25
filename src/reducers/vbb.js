import uuid from 'node-uuid'

let initialState = {
  suggestions: [{
    id: uuid.v4(),
    generalSuggestion: 'Be awesome'
  }],
};

export function vbb(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SUGGESTION':
      return {
        ...state,
        suggestions: state.suggestions.concat([{
          id: uuid.v4(),
          generalSuggestion: action.generalSuggestion,
          talkSuggestion: action.talkSuggestion
        }]),
      };

    default:
      return state;
  }
}
