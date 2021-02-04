import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import './App.css';


function App() {

  const [entries, setenties] = useState(initialEntries)
  
  return (

    <Container>
<MainHeader title="Budget" type='h1' />
  <DisplayBalance title="Your Balance" value="2,500.53" size="small" />
  <DisplayBalances/>
<MainHeader title='History' type='h3'/>

<EntryLines entries={entries} />

<MainHeader title='Add new transaction' type='h3'/>
  <NewEntryForm />
    </Container>
  );
}

export default App;

let initialEntries = [
  { 
    description: 'Work income',
    value: '$10,000.00',
    isExpense:false
  },
  {
    description: 'electric bill',
    value: '$250.00',
    isExpense:true
  },
  {
    description: 'car bill',
    value: '$650.00',
    isExpense:true
  },
  {
    description: 'rent',
    value: '$2,240.00',
    isExpense:true
  }

]