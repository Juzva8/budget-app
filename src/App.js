import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLine from './components/EntryLine'
import './App.css';


function App() {
  return (

    <Container>
<MainHeader title="Budget" type='h1' />
<DisplayBalance title="Your Balance" value="2,500.53" size="small" />
<DisplayBalances/>

<MainHeader title='History' type='h3'/>
<EntryLine description='income' value='$100.00' />
<EntryLine description='expense' value='$40.00' isExpense />


<MainHeader title='Add new transaction' type='h3'/>
<NewEntryForm />
    </Container>
  );
}

export default App;
