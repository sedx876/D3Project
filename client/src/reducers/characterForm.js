const initialState = {
  title: '',
  characterKlass: '',
  helm: '',
  shoulders: '',
  gloves: '',
  chestArmor: '',
  belt: '',
  pants: '',
  boots: '',
  bracers: '',
  amulet: '',
  ring1: '',
  ring2: '',
  weapon: '',
  offhand: '',
  gemNotes: '',
  kanaisCube: '',
  activeSkills: '',
  passiveSkills: '',
  generalBuildNotes: '',
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_CHARACTER_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
      case "RESET_NEW_CHARACTER_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.characterFormData
      default:
        return state
  }
}