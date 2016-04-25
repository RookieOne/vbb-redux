import { push } from 'react-router-redux';

export function addSuggestion(generalSuggestion, talkSuggestion) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_SUGGESTION',
      generalSuggestion,
      talkSuggestion,
    })
    dispatch(push('/suggestions'));
  }
}