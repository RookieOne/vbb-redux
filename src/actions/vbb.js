import { push } from 'react-router-redux';
import Api from 'api/vbb';

export function addSuggestion(generalSuggestion, talkSuggestion) {
  return (dispatch) => {
    Api.addSuggestion(generalSuggestion, talkSuggestion).then((suggestion) => {
      dispatch({
        type: 'ADD_SUGGESTION',
        suggestion,
      });
      dispatch(push('/suggestions'));
    });
  };
}

export function getSuggestions() {
  return (dispatch) => {
    Api.getSuggestions().then((suggestions) => {
      dispatch({
        type: 'GOT_SUGGESTIONS',
        suggestions,
      });
    });
  };
}
