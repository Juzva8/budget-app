import { Container, Header, Statistic, Segment, Grid, Icon } from 'semantic-ui-react'
import './App.css';

function App() {
  return (

    <Container>
      
      <Header as='h1'>Budget</Header>

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
<Header as="h3">History</Header>
<Segment color="red"> 
<Grid columns={3} textAlign="right">
<Grid.Row>
<Grid.Column>Something</Grid.Column>
<Grid.Column>$10.00</Grid.Column>
<Grid.Column>
  <Icon name="edit" bordered/>
  <Icon name="trash" />
</Grid.Column>
</Grid.Row>

  
</Grid>
</Segment>
    </Container>
  );
}

export default App;
