import React from 'react'
import { Table } from 'semantic-ui-react'

class WBCTable extends React.Component {
    generateWBCFeatures = (wbcArr) => {
        if(wbcArr === []){
            return (
                <Table.Row>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            )
        }

        return wbcArr.map(item => {
            return (
                <Table.Row>
                    <Table.Cell style={{textAlign: 'center'}}>{item}</Table.Cell>
                </Table.Row>
            )
        })
    }

    render(){
        const {state} = this.props
        return (
            <Table inverted celled columns={5} selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{textAlign:'center'}}>Reported WBC Features</Table.HeaderCell>
                    </Table.Row>
            </Table.Header>
  
            <Table.Body>
                {this.generateWBCFeatures(state.WBCAbnormalities)}
            </Table.Body>
        </Table>
        )
    }
}
    
    
    

export default WBCTable