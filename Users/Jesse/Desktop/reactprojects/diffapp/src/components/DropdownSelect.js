import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class DropdownSelect extends React.Component {
 
  getOptions = (morph) => {
    return ( 
      [
        { key: '1', text: '+1', value: {grade:'1+', morph: morph} },
        { key: '2', text: '+2', value: {grade:'2+', morph: morph} },
        { key: '3', text: '+3', value: {grade:'3+', morph: morph} },
        { key: '4', text: 'Present', value: {grade:'Present', morph: morph} },
        { key: '5', text: 'Occ', value: {grade:'Occasional', morph: morph} },
        {key: '6', text: 'Grade', value:'Grade'}
      ]
    )
  }

  render(){
    return (
      <div>
        <Dropdown 
          upward 
          floating 
          inline 
          options={this.getOptions(this.props.morph)} 
          defaultValue= 'Grade' 
          onChange={this.props.getDropdownSelectValues}
        />
      </div>
    )
  }
}
  

export default DropdownSelect