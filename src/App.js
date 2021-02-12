import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines'
import ModalEdit from './components/ModalEdit'
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [ExpenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const {isOpen, id} = useSelector(state => state.modals);
  const entries = useSelector(state => state.entries);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index])
  }, [isOpen, id]);

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

  return (
    <Container>
<MainHeader title="Budget" type='h1' />
  <DisplayBalance title="Your Balance" value={total} size="small" />
  <DisplayBalances totalIncome={totalIncome} totalExpenses={ExpenseTotal} />
<MainHeader title='History' type='h3'/>

<EntryLines entries={entries} />

<MainHeader title='Add new transaction' type='h3'/>
  <NewEntryForm />
    <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App