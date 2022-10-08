

export const petReducer = (initialState = [], action ) => {
  switch (action.type) {
    case 'add pet':
        return [...initialState, action.payload ];
    case 'add newPets':
        return action.payload;
    case 'del pet':
        return action.payload;
    case 'ls':
        return action.payload;
    default:
        return initialState;
  }
}
