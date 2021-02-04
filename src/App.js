import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import './App.css';


function App() {
const [entries, setEntries] = useState(initialEntries);

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

<EntryLines entries={entries} deletedEntry={deletedEntry} />

<MainHeader title='Add new transaction' type='h3'/>
  <NewEntryForm addEntry = {addEntry} />
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