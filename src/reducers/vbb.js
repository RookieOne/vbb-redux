const initialState = {
  suggestions: [],
};

export function vbb(state = initialState, action) {
  switch (action.type) {
    case 'GOT_SUGGESTIONS':
      return {
        ...state,
        suggestions: action.suggestions,
      }
    case 'ADD_SUGGESTION':
      return {
        ...state,
        suggestions: state.suggestions.concat([action.suggestion]),
      };

    default:
      return state;
  }
}
