import { useState } from 'react'
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

 const deletedEntry = (id) => { 
   const result = entries.filter((entry) => entry.id !== id);
   setEntries(result);
  }


  const addEntry = (description, value, isExpense) => { 
      const result = entries.concat({
      id: entries.length + 1, 
      description, 
      value,
      isExpense,
    });
    setEntries(result);
  }

  return (

    <Container>
<MainHeader title="Budget" type='h1' />
  <DisplayBalance title="Your Balance" value="2,500.53" size="small" />
  <DisplayBalances/>
<MainHeader title='History' type='h3'/>

<EntryLines entries={entries} deletedEntry={deletedEntry} setIsOpen={isOpen} />

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
    <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
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