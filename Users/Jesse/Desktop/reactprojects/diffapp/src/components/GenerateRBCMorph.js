import React from 'react'
import DropdownSelect from './DropdownSelect'
import _ from 'lodash'

class GenerateRBCMorph extends React.Component { //props passed off as an array
    state = {
        RBCMorphs: [],
    }

    getDropdownSelectValues = (e, {value}) => {
        //modify the array so it contains the latest value and its unique, then setState
        let RBCArr = [...this.state.RBCMorphs]

        if(!RBCArr.length){
            RBCArr.push(value)
        }else{
            for (let i=0; i<RBCArr.length; i++){
                if(value.morph === RBCArr[i].morph){
                    RBCArr.splice(i, 1, value)
                }else {
                    RBCArr.push(value)
                }
            }
        }

        RBCArr = _.uniq(RBCArr) //Get unique values only
    
        this.setState({RBCMorphs: RBCArr})
        this.props.getRBCMorphsAndGrade(RBCArr)
    }


    render(){
        const RBCMorphEl = this.props.RBCMorph.map((morph, index) => {
            return (
                <div key = {index} >
                        <p style={{display: 'inline-block'}}>{morph}</p>
                        <div style={{display: 'inline-block', marginLeft: '15px'}}>
                            <DropdownSelect  
                                getDropdownSelectValues = {this.getDropdownSelectValues}
                                morph={morph}
                            />
                        </div>
                            
                </div>
            )
        })

        return (
            <div>{RBCMorphEl}</div>
        )


    }
    
}

export default GenerateRBCMorph