export const optionsListSelector = state => {
  return state.options.optionsList;
};

export const selectedOptionsList = state => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => selectedIds.includes(option.id));
};

export const availableOptionsList = state => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter(option => !selectedIds.includes(option.id));
};
