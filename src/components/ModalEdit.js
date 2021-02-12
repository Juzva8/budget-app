import { useDispatch } from 'react-redux'
import { Modal, Button } from 'semantic-ui-react'
import { closeEditModal } from '../actions/modals.actions';
import EntryForm from './EntryForm'
import useEntryDetails from '../hooks/useEntryDetails'
function ModalEdit({
    isOpen, 
    description, 
    value, 
    isExpense, 
    }) {
    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense)
    return (
        <Modal open = {isOpen} >
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
             <EntryForm 
                description={entryUpdate.description}
                setDescription={entryUpdate.etDescription}
                value={entryUpdate.value}
                setValue={entryUpdate.setValue}
                isExpense={entryUpdate.isExpense}
                setIsExpense={entryUpdate.setIsExpense}
             />
                </Modal.Content>
                <Modal.Actions> 
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button onClick={() => dispatch(closeEditModal())} primary>OK</Button>
                </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit