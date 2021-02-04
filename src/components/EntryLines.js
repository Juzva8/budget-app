import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';


function EntryLines({entries, deletedEntry }) {
    return (
        <Container>
        {entries.map((entry) =>  (
            <EntryLine
            key={entry.id} {...entry} deletedEntry={deletedEntry}/>
          ))}
          </Container>
    )
}

export default EntryLines
