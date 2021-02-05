import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLine from './EntryLine';


function EntryLines({entries, deletedEntry, setIsOpen }) {
    return (
        <Container>
        {entries.map((entry) =>  (
            <EntryLine key={entry.id} {...entry} deletedEntry={deletedEntry} setIsOpen={setIsOpen} />
          ))}
          </Container>
    )
}

export default EntryLines
