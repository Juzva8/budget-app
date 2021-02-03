import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance() {
    return (
        <Statistic size='tiny' color='green'>
        <Statistic.Label style={{textAlign:'center'}}>
          Income:
        </Statistic.Label>
        <Statistic.Value>1,045.50</Statistic.Value>
      </Statistic>
    )
}

export default DisplayBalance
