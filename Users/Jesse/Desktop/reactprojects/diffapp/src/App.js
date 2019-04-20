import React from 'react'

import CellDiff from './components/CellDiff'
import Toggle from './components/Toggle'
import GetDifferential from './components/GetDifferential'
import DropdownWBC from './components/DropdownWBC'
import DropdownRBC from './components/DropdownRBC'
import GenerateRBCMorph from './components/GenerateRBCMorph'
import Title from './components/Title'
import { Button } from 'semantic-ui-react'

import './styles/style.css'

class App extends React.Component {
    state = {
        keyPressed: '',
        keyCount: 0,
        currentCell: '',
        Neutrophil:0,
        Lymphocyte:0,
        Monocyte:0,
        Basophil:0,
        Eosinophil: 0,
        IG:0,
        Blast: 0,
        nRBC:0,
        inputClicked: false,
        increaseCount: true,
        isOpen: false,
        totalWBC: 0.0,
        WBCAbnormalities: [],
        RBCMorph: [],
        RBCMorphsAndGrade: []
    }


    onKeyPress = (e) => {

        const returnCell = () => {
            switch(e.target.value){
                case 'v':
                    return 'Neutrophil';
                case 'c':
                    return 'Lymphocyte';
                case 'x':
                    return 'Monocyte';
                case 'z':
                    return 'Basophil';
                case 'f':
                    return 'IG';
                case 'd':
                    return 'Eosinophil';
                case 's':
                    return 'Blast';
                case 'a': 
                    return 'nRBC'
                default:
                    return;
            }
        }

        const currentCell = returnCell()

        if(this.state.keyCount >= 0 && this.state.keyCount <= 100){
            if( e.target.value === 'v' || 
            e.target.value === 'c' || 
            e.target.value === 'x' || 
            e.target.value === 'z' || 
            e.target.value === 'f' || 
            e.target.value === 'd' || 
            e.target.value === 's' ||
            e.target.value === 'a'
            ){
                
                if(this.state.keyCount < 100 && this.state.keyCount > 0){ //Is the count between 0 and 100?
                   if(this.state.increaseCount){//increase toggle set to true?
                       this.setState(prevState => {
                           return {
                               keyCount: prevState.keyCount + 1,
                               [currentCell]: prevState[currentCell] + 1
                           }
                       })
                   }else if(!this.state.increaseCount){ // decrease toggle set true?
                     this.setState(prevState => {
                         if(prevState[currentCell] !== 0){ // Making sure the current cell isnt at 0 before decrementing
                            return {
                                keyCount: prevState.keyCount - 1,
                                [currentCell]: prevState[currentCell] -1
                            }
                         }
                         
                     })  
                   }
                }

                //edge cases
                if(!this.state.keyCount || this.state.keyCount === 100){ //Is the count equal 0 or 100?
                    if(!this.state.keyCount && this.state.increaseCount){
                        this.setState(prevState => {
                            return {
                                keyCount: prevState.keyCount + 1,
                                [currentCell]: prevState[currentCell] + 1
                            }
                        })
                    }

                    if(this.state.keyCount === 100 && !this.state.increaseCount){ //The count is equal to 100 and decrementing?
                        this.setState(prevState => {
                            return {
                                keyCount: prevState.keyCount - 1,
                                [currentCell]: prevState[currentCell] -1
                            }
                        })
                    }

                }
               
            } 
            this.setState({currentCell: currentCell})
        }

        if(this.state.keyCount === 100){
            console.log('done')
        }
        
    }

    handleReset = () => {
        this.setState({
            keyPressed: '',
            keyCount: 0,
            currentCell: '',
            Neutrophil:0,
            Lymphocyte:0,
            Monocyte:0,
            Basophil:0,
            Eosinophil: 0,
            IG:0,
            Blast: 0,
            nRBC:0,
            inputClicked: false,
            increaseCount: true,
        })
    }

    handleInputClick = () => {
        this.setState({inputClicked: true})
    }

    handleToggleChange = () => {
        this.setState(prevState => {
            return {increaseCount: !prevState.increaseCount}
        })
    }

    getDifferential = () => {
        console.log('getResults')
    }

    totalWBC = (e) => {
        this.setState({totalWBC: e.target.value})
        console.log(this.state.totalWBC)
    }

    handleWBCSelectChange = (e,{value}) => {
        this.setState({WBCAbnormalities: value})
        console.log(e.target.name)
        console.log(this.state.WBCAbnormalities)
    }

    handleRBCSelectChange = (e, {value}) => {
        this.setState({RBCMorph: value})
    }   

    getRBCMorphsAndGrade = (list) => {
        this.setState({RBCMorphsAndGrade: list})
        console.log(this.state.RBCMorphsAndGrade , 'from app')
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render(){
        // console.log(this.state.inputClicked, this.state.currentCell)
        const {currentCell, inputClicked} = this.state;
        const placeholderText = !currentCell && !inputClicked ? 'Click here to start' :
            inputClicked && !currentCell ? 'Begin differential' : currentCell 
        
        return (
            <div style={{padding: '2em'}}>
                <Title />
                <form onSubmit = {this.handleSubmit}>

                
                <div style ={{textAlign: 'center'}}>
                    <div className='ui medium icon input'>
                        <input  type="text" placeholder = {placeholderText} //Diff input
                            id = 'diff-input'
                            value = '' 
                            onChange = {this.onKeyPress} 
                            onClick={this.handleInputClick}
                            onBlur = {() => {this.setState({inputClicked:false, currentCell: 'Click to continue'})}} 
                            style = {{cursor: 'pointer', textAlign:'center', marginLeft: '20px' }}
                        />
                    </div>
                    <br/>
                    <br/>
                    <div> 
                        <Toggle 
                            handleToggleChange={this.handleToggleChange} 
                            checked={this.state.increaseCount}
                        />
                        <CellDiff CellDiff = {this.state} />
                        <br/>
                        <button className = 'ui red button' onClick={this.handleReset}>Reset Differential</button>
                    </div>
               </div>   
                <br/>
                <div style={{textAlign: 'center'}}>



                
                    <div className='ui medium icon input'> 
                        <input type="number" placeholder = 'Enter total WBC count' onChange={this.totalWBC} className='quantity' required/>
                    </div>
                
                    

                    <label>  x 10 <sup>9</sup></label>/L
                </div>
                <br/>
                <div>
                    <label>Report WBC features or SNTP:</label>
                    <hr/>
                    <DropdownWBC handleWBCSelectChange={this.handleWBCSelectChange}/>
                </div>
                <br/>
                <div>            
                    <label>Report RBC Morphology: </label>
                    <hr/>
                    <DropdownRBC handleRBCSelectChange = {this.handleRBCSelectChange}/>
                    <br/>
                    <GenerateRBCMorph 
                        getRBCMorphsAndGrade={this.getRBCMorphsAndGrade} 
                        RBCMorph = {this.state.RBCMorph}
                    />

                </div>   

                {!this.state.totalWBC ? <Button className='ui primary blue button'>Get Results</Button> : <GetDifferential state={this.state}/>}    
                
                </form>
            </div>
        )
    }
}

export default App