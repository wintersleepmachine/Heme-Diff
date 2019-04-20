import React from 'react'
import { Table } from 'semantic-ui-react'

class MorphTable extends React.Component {
    generateRBCMorph = (RBCMorph) => { //this function takes an array of objects. each object: {grade: 1+, morph: morph}
        if(!RBCMorph){
            return (
                <Table.Row>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            )
        }

        return RBCMorph.map(item => {
            return <Table.Row>
                        <Table.Cell>{item.morph}</Table.Cell>
                        <Table.Cell>{item.grade}</Table.Cell>
                    </Table.Row>
        })
    }

    render(){
        const {state} = this.props
        return (
            <Table inverted celled columns={5} selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{textAlign:'center'}}>Reported Morph</Table.HeaderCell>
                        <Table.HeaderCell style={{textAlign:'center'}}>Grade</Table.HeaderCell>
                    </Table.Row>
            </Table.Header>
  
            <Table.Body>
                {this.generateRBCMorph(state.RBCMorphsAndGrade)}
            </Table.Body>
        </Table>
        )
    }
}
    
    
    

export default MorphTable