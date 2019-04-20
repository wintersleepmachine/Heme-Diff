import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import DiffTable from './DiffTable'
import WBCTable from './WBCTable'
import WBCFeatures from './WBCFeatures'
import MorphTable from './MorphTable'


const GetDifferential = ({state}) => (
  <Modal trigger={<Button className='ui primary blue button'>Get Results</Button>} basic size='small'>
    <Header />
    <div className="scrolling content">
      <Modal.Content>
        <h1 style={{textAlign:'center'}}>Differential Results</h1>
        <WBCTable state={state} />
        <DiffTable state={state}/>
        <WBCFeatures state={state}/>
        <MorphTable state={state} />
      </Modal.Content>
    </div>
    <Modal.Actions>
      <label>Send results to the physician?</label>
      <Button color='green' inverted onClick={() => {window.location.reload()}}>
        <Icon name='checkmark' /> Yes
      </Button>
      <Button color='red' inverted onClick = {(e)=> {e.stopPropagation()}}>
        <Icon name='remove' /> No
      </Button>
    </Modal.Actions>
  </Modal>
)

export default GetDifferential
