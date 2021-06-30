const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_CHARACTERS":
      return action.characters
    case "ADD_CHARACTERS":
      return state.concat(action.character)
    case "UPDATE_CHARACTER":
      return state.map(character => character.id === action.character.id ? action.character : character)
    case "DELETE_CHARACTER":
      return state.filter(character => character.id === action.characterId ? false : true)
    case "CLEAR_CHARACTERS":
      return initialState
    default:
      return state
  }
}