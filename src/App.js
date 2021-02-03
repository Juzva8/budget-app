import { Container, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'

import './App.css';

function App() {
  return (

    <Container>
<MainHeader title="Budget" type='h1' />
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,500.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
          <Statistic size='tiny' color='green'>
          <Statistic.Label style={{textAlign:'center'}}>
            Income:
          </Statistic.Label>
          <Statistic.Value>1,045.50</Statistic.Value>
        </Statistic>

          </Grid.Column>
          <Grid.Column>
          <Statistic size='tiny' color='red'>
          <Statistic.Label style={{textAlign:'center'}}>
            Expenses:
          </Statistic.Label>
          <Statistic.Value>625.50</Statistic.Value>
        </Statistic>

          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title='History' type='h3'/>
<Segment color="red"> 
<Grid columns={3} textAlign="right">
<Grid.Row>
<Grid.Column width={10} textAlign="left" >Something</Grid.Column>
<Grid.Column width={3} textAlign="right" >$10.00</Grid.Column>
<Grid.Column width={3}>
  <Icon name="edit" bordered/>
  <Icon name="trash" bordered/>
</Grid.Column>
</Grid.Row>
</Grid>
</Segment>
<Segment color="red"> 
<Grid columns={3} textAlign="right">
<Grid.Row>
<Grid.Column width={10} textAlign="left" >Something</Grid.Column>
<Grid.Column width={3} textAlign="right" >$10.00</Grid.Column>
<Grid.Column width={3}>
  <Icon name="edit" bordered/>
  <Icon name="trash" bordered/>
</Grid.Column>
</Grid.Row>
</Grid>
</Segment>
<Segment color="red"> 
<Grid columns={3} textAlign="right">
<Grid.Row>
<Grid.Column width={10} textAlign="left" >Something</Grid.Column>
<Grid.Column width={3} textAlign="right" >$10.00</Grid.Column>
<Grid.Column width={3}>
  <Icon name="edit" bordered/>
  <Icon name="trash" bordered/>
</Grid.Column>
</Grid.Row>
</Grid>
</Segment>

<MainHeader title='Add new transaction' type='h3'/>

<Form unselectable>
  <Form.Group>
    <Form.Input 
    icon="tags" 
    width={12}
    label='Description'
    placeholder="New shinny thing"
    />
    <Form.Input 
    icon='dollar'
    iconPosition='left'
    width={4}
    label='Value'
    placeholder="100.00"
    />
  </Form.Group>
  <Button.Group style={{marginTop: 20}}>
    <Button>Cancel</Button>
    <Button.Or/>
    <Button primary>OK</Button>
  </Button.Group>
</Form>
    </Container>
  );
}

export default App;
