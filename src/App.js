import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
import './App.css';


function App() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if(!isOpen && entryId) {
        const index = entries.findIndex(entry => entry.id === entryId)
        const newEntries = [...entries];
        newEntries [index].description = description;
        newEntries[index].value = value;
        newEntries[index].isExpense = isExpense;
        setEntries(newEntries);
        resetEntry();

    }
    
  }, [isOpen]);

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
  <DisplayBalance title="Your Balance" value="2,500.53" size="small" />
  <DisplayBalances/>
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
  description: 'bill',
  value: '1,000.00',
  isExpense: true,
},
{
  id: 2,
  description: 'bill',
  value: '1,000.00',
  isExpense: true,
},
{
  id: 3,
  description: 'bill',
  value: '1,000.00',
  isExpense: true,
},
{
  id: 4,
  description: 'bill',
  value: '1,000.00',
  isExpense: true,
}
]