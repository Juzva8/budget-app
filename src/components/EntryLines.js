import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';


function EntryLines({entries, deletedEntry, editEntry }) {
    return (
        <Container>
        {entries.map((entry) =>  (
            <EntryLine 
            key={entry.id} {...entry} 
            deletedEntry={deletedEntry} 
            editEntry={editEntry} 
            />
          ))}
          </Container>
    )
}

export default EntryLines
