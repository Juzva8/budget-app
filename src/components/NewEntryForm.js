import React from 'react';
import { Form } from 'semantic-ui-react';
import {addEntryRedux} from '../actions/entries.actions';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';
import {v4 as uuidv4} from 'uuid';
import useEntryDetails from '../hooks/useEntryDetails';

function NewEntryForm() {
  const {
    description, 
    setDescription, 
    setValue, 
    value, 
    isExpense, 
    setIsExpense, 
    addEntry,
} = useEntryDetails(); 
    return (
        <Form unstackable>
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
