import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const rbcOptions = [
    {
        key:1,
        text: 'Acanthocyte',
        value: 'Acanthocyte'
    },
    {
        key:2,
        text: 'Bite Cell',
        value: 'Bite Cell' 
    },
    {
        key:3,
        text: 'Echinocyte',
        value:  'Echynocyte'
    },
    {
        key:4,
        text: 'Schisotocyte',
        value: 'Schistocyte'
    },
    {
        key:5,
        text: 'Macrocyte',
        value: 'Macrocyte'
    },
    {
        key:6,
        text: 'Microcyte',
        value: 'Microcyte'
    },
    {
        key:7,
        text: 'Elliptocyte',
        value: 'Elliptocyte'
    },
    {
        key:8,
        text: 'Polychromatic Cell',
        value: 'Polychromatic Cell'
    },
    {
        key:9,
        text: 'Sickle Cell',
        value: 'Sickle Cell'
    },
    {
        key:10,
        text: 'Spherocyte',
        value: 'Spherocyte'
    },
    {
        key:11,
        text: 'Stomatocyte',
        value: 'Stomatocyte'
    },
    {
        key:12,
        text: 'Target Cell',
        value: 'Target Cell'
    },
    {
        key:13,
        text: 'Teardrop Cell',
        value: 'Teardrop Cell'
    },
    {
        key:14,
        text: 'Reticulocyte',
        value: 'Reticulocyte'
    },
    {
        key:15,
        text: 'Basophilic Stippling',
        value: 'Basophilic Stippling'
    },
    {
        key:16,
        text: 'Heinz Body',
        value: 'Heinz Body'
    },
    {
        key:17,
        text: 'H-J Body',
        value: 'H-J Body'
    },
    {
        key:18,
        text: 'Pappenheimer Bodies',
        value: 'Pappenheimer Bodies'
    },
    {
        key:19,
        text: 'Malaria',
        value: 'Malaria'
    },
    {
        key:20,
        text: 'Normal',
        value: 'Normal'
    },
    {
        key:21,
        text: 'Non-Specific Changes',
        value: 'Non-Specific Changes'
    }
]


const DropdownRBC = (props) => (
  <Dropdown
    placeholder='Search RBC Morphology...'
    fluid
    multiple
    search
    selection
    options={rbcOptions}
    onChange={props.handleRBCSelectChange}
    upward
  />
)

export default DropdownRBC
