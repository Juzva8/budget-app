import React, { Fragment } from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'


function EntryLine({id, description, value, isExpense = false, deletedEntry, setIsOpen } ) {
  return (
<Fragment>
        <Segment color={isExpense ? 'red' : 'green'}> 
        <Grid columns={3} textAlign="right">
        <Grid.Row>
        <Grid.Column width={10} textAlign="left" >
        {description}
        </Grid.Column>
        <Grid.Column width={3} textAlign="right" >
        {value}
            </Grid.Column>
        <Grid.Column width={3}>
          <Icon name="edit" bordered onClick={() => setIsOpen(true)}/>
          <Icon name="trash" bordered onClick={() => deletedEntry(id)} />
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Segment>
      
     </Fragment>
    )
}

export default EntryLine


// function EntryLine({id, description, value, isExpense = false, deletedEntry, setIsOpen } ) {
