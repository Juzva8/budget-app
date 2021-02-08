import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
import './App.css';
import { createStore } from 'redux';



function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0);
  const [ExpenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if(!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries];
        newEntries[index].description = description;
        newEntries[index].value = value;
        newEntries[index].isExpense = isExpense;
        setEntries(newEntries);
        resetEntry();

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
  entries.map(entry => {
    if(entry.isExpense){
      return (totalExpenses += Number(entry.value));
    } 
    return (totalIncome += Number(entry.value));
  });

    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setTotalIncome(totalIncome);

  }, [entries]);


  const store = createStore((state = initialEntries, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_ENTRY':
        const newEntries = entries.concat({
          id: 5,
          description: 'Bonus',
          value: 100,
          expense: false,
        });
        return newEntries;
        
        break;
    
      default:
        return state;
    }
 
  });

  console.log('store before ', store.getState())

  store.dispatch({ type: 'ADD_ENTRY'});
  console.log('store after ', store.getState())

 const deletedEntry = (id) => { 
   const result = entries.filter((entry) => entry.id !== id);
   setEntries(result);
  }

  const editEntry = (id) => {
    console.log(`edit entry with id ${id}`);
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }

  } 

  const addEntry = () => { 
      const result = entries.concat({
      id: entries.length + 1, 
      description, 
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  }
  
  const resetEntry = () => {
    setDescription(' ');
    setValue(' ');
    setIsExpense(true);
  }

  return (

    <Container>
<MainHeader title="Budget" type='h1' />
  <DisplayBalance title="Your Balance" value={total} size="small" />
  <DisplayBalances totalIncome={totalIncome} totalExpenses={ExpenseTotal} />
<MainHeader title='History' type='h3'/>

<EntryLines 
entries={entries} 
deletedEntry={deletedEntry} 
editEntry = {editEntry}
/>

<MainHeader title='Add new transaction' type='h3'/>
  <NewEntryForm 
  addEntry = {addEntry} 
  description={description}
  setDescription={setDescription}
  value={value}
  setValue={setValue}
  isExpense={isExpense}
  setIsExpense={setIsExpense}
  />
    <ModalEdit 
    isOpen={isOpen} 
    setIsOpen={setIsOpen} 
    addEntry = {addEntry} 
    description={description}
    setDescription={setDescription}
    value={value}
    setValue={setValue}
    isExpense={isExpense}
    setIsExpense={setIsExpense}
    />
    </Container>
  );
}

export default App

var initialEntries = [
 {
  id: 1,
  description: 'Salary',
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