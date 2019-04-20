import React from 'react'
import { Table } from 'semantic-ui-react'

class WBCTable extends React.Component {
    correctedWBC = (wbc, nrbc) => {
        if(!nrbc){
            return 'N/A'
        }else{
            return (
                <div>
                    {((wbc*100)/(100+nrbc)).toFixed(2)} x 10 <sup>9</sup>/L
                </div>
            )
        }
    }

    getArrow = (wbc) => {
        if (wbc > 11){
            return (
                <i className="arrow up icon" />
            )
        }else if(wbc < 4.5){
            return (
                <i className="arrow down icon" />
            )
        }else {
            return null
        }
    }

    render(){
        const {state} = this.props
        const correctedWBC = this.correctedWBC(state.totalWBC, state.nRBC)
        return (
            <Table inverted celled columns={5} selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Total WBC</Table.HeaderCell>
                        <Table.HeaderCell>Corrected WBC</Table.HeaderCell>
                    </Table.Row>
            </Table.Header>
  
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{state.totalWBC} x 10<sup>9</sup>/L {this.getArrow(state.totalWBC)}</Table.Cell>
                    <Table.Cell>{correctedWBC === 'N/A' ? correctedWBC : 
                        (<div>
                            <div style={{display:'inline-block'}}>
                                {correctedWBC}
                            </div>
                            <div style={{display: 'inline-block'}}>
                                
                            {this.getArrow(state.totalWBC)}
                            </div> 
                        </div>)}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
        )
    }
}
    
    
    

export default WBCTable