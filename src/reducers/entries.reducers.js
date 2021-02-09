
const reducer = (state = initialEntries, action)  => {
    let newEntries;
    switch (action.type) {
      case 'ADD_ENTRY':
        newEntries = state.concat({ ...action.payload });
        return newEntries;
        case 'REMOVE_ENTRY':
        newEntries = state.filter(entry => entry.id !== action.payload.id);
          return newEntries
          case 'UPDATE_ENTRY': 
          newEntries = [...state];
          const index = newEntries.findIndex(entry => entry.id === action.payload.id)
      default:
        return state;
    }
  }
export default reducer;


  var initialEntries = [
    {
     id: 1,
     description: 'Salary Redux',
     value: 7000,
     isExpense: false,
   },
   {
     id: 2,
     description: 'Electric bill',
     value: 230,
     isExpense: true,
   },
   {
     id: 3,
     description: 'gas bill',
     value: 20,
     isExpense: true,
   },
   {
     id: 4,
     description: 'phone bill',
     value: 100,
     isExpense: true,
   }
   ]