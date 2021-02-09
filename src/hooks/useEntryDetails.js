


function useEntryDetails() {
const [description, setDescription] = useState('');
const [value, setValue] = useState('');
const [isExpense, setIsExpense] = useState(true);
const dispatch = useDispatch()

  
function addEntry(){
dispatch(addEntryRedux({
  id: uuidv4(),
  description,
  value,
  isExpense
}))
setDescription('');
setValue('');
setIsExpense(true);
  }
return {
    description, setDescription, setValue, value, isExpense, setIsExpense, addEntry}

}

export default useEntryDetails
