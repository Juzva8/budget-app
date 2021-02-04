import React from 'react'
import { container } from 'semantic-ui-react'
import EntryLine from './EntryLine'


function EntryLines(entries) {
    return (
        <container>
        {entries.map((entry) =>  (
            <EntryLine
            description={entry.description}
            value={entry.value}
            isExpense={entry.isExpense}
            />
          ))}
          </container>
    )
}

export default EntryLines
