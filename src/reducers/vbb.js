const initialState = {
  suggestions: [],
  videos: [],
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
    case 'GOT_VIDEOS':
      return {
        ...state,
        videos: action.videos,
      };

    default:
      return state;
  }
}
