import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const wbcOptions = [
    {
        key:1,
        text: 'Normal',
        value: 'Normal'
    },
    {
        key:2,
        text: 'PLT Clumping',
        value: 'PLT Clumping' 
    },
    {
        key:3,
        text: 'Reactive Lymphocytes',
        value:  'Reactive Lymphocytes'
    },
    {
        key:4,
        text: 'Hypersegmented Neutrophils',
        value: 'Hypersegmented Neutrophils'
    },
    {
        key:5,
        text: 'Smudge Cells',
        value: 'Smudge Cells'
    },
    {
        key:6,
        text: 'Abnormal Lymphocytes',
        value: 'Abnormal Lymphocytes'
    },
    {
        key:7,
        text: 'Dysplastic Changes',
        value: 'Dysplastic Changes'
    },
    {
        key:8,
        text: 'Toxic Changes',
        value: 'Toxic Changes'
    },
    {
        key:9,
        text: 'Blasts Present w/ Auer Rods',
        value: 'Blasts Present w/ Auer Rods'
    },
    {
        key:10,
        text: 'Blasts Present',
        value: 'Blasts Present'
    },
    {
        key:11,
        text: 'Pelger Huet Cell',
        value: 'Pelger Huet Cell'
    },
    {
        key:12,
        text: 'Sent To Pathologist for Review',
        value: 'Sent To Pathologist for Review'
    }
]


const DropdownWBC = (props) => (
  <Dropdown
    placeholder='Search WBC Features...'
    fluid
    multiple
    search
    selection
    options={wbcOptions}
    onChange={props.handleWBCSelectChange}
  />
)

export default DropdownWBC
