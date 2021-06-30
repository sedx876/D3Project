export const updateCharacterForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_CHARACTER_FORM",
    formData
  }
}

export const resetCharacterForm = () => {
  return {
    type: "RESET_NEW_CHARACTER_FORM",
  }
}

export const setFormDataForEdit = character => {
  const characterFormData = {
    title: character.attributes.title,
    characterKlass: character.attributes.character_klass,
    helm: character.attributes.helm,
    shoulders: character.attributes.shoulders,
    gloves: character.attributes.gloves,
    chestArmor: character.attributes.chest_armor,
    belt: character.attributes.belt,
    pants: character.attributes.pants,
    boots: character.attributes.boots,
    bracers: character.attributes.bracers,
    amulet: character.attributes.amulet,
    ring1: character.attributes.ring_1,
    ring2: character.attributes.ring_2,
    weapon: character.attributes.weapon,
    offhand: character.attributes.offhand,
    gemNotes: character.attributes.gem_notes,
    kanaisCube: character.attributes.kanais_cube,
    activeSkills: character.attributes.active_skills,
    passiveSkills: character.attributes.passive_skills,
    generalBuildNotes: character.attributes.general_build_notes
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    characterFormData
  }
}