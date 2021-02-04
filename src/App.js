import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import './App.css';


function App() {

  const [entries, setEnties] = useState(initialEntries)

 const deletedEntry = (id) => { 
   const result = entries.filter(entry => entry.id !== id);
   console.log('entries', entries)
   console.log('result', result)
   setEnties(result)
  }

  return (

    <Container>
<MainHeader title="Budget" type='h1' />
  <DisplayBalance title="Your Balance" value="2,500.53" size="small" />
  <DisplayBalances/>
<MainHeader title='History' type='h3'/>

<EntryLines entries={entries} deletedEntry={deletedEntry} />

<MainHeader title='Add new transaction' type='h3'/>
  <NewEntryForm />
    </Container>
  );
}

export default App;

let initialEntries = [
  { 
    id:1,
    description: 'Work income',
    value: '$10,000.00',
    isExpense:false
  },
  {
    id:2,
    description: 'electric bill',
    value: '$250.00',
    isExpense:true
  },
  {
    id:3,
    description: 'car bill',
    value: '$650.00',
    isExpense:true
  },
  {
    id:4,
    description: 'rent',
    value: '$2,240.00',
    isExpense:true
  }

]