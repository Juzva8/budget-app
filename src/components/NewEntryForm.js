import React, { useState} from 'react'
import {useDispatch} from 'react-redux'
import { Form } from 'semantic-ui-react'
import {addEntryRedux} from '../actions/entries.actions'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm';

function NewEntryForm() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch()

  
  function addEntry(){
dispatch(addEntryRedux({
  id: 5,
  description,
  value,
  isExpense
}))
setDescription('');
setValue('');
setIsExpense(true);
  }

    return (
        <Form>
        <EntryForm 
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        />
      <ButtonSaveOrCancel addEntry={addEntry} 
      />
      </Form>
    )
}

export default NewEntryForm
