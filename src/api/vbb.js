import Firebase from 'firebase';

const Suggestions = new Firebase('https://virtualbrownbag.firebaseio.com/suggestions');

export function getSuggestions() {
  return new Promise((resolve, reject) => {
    Suggestions.once('value', (snap) => {
      let suggestions = [];
      snap.forEach((s) => {
        suggestions.push({
          ...s.val(),
          id: s.key(),
        });
      });
      resolve(suggestions);
    });
  });
}

export function addSuggestion(generalSuggestion, talkSuggestion) {
  return new Promise((resolve, reject) => {
    const suggestion = Suggestions.push({
      generalSuggestion: generalSuggestion || '',
      talkSuggestion: talkSuggestion || ''
    });
    resolve(suggestion);
  });
}

export default {
  getSuggestions,
  addSuggestion,
};
