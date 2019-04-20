import React from 'react'

const Toggle = ({handleToggleChange, checked}) => {
    return (
        <div className="grouped fields">
            <div className="field">
                <div className="ui slider checkbox">
                    <input 
                        type="radio" 
                        checked = {checked} 
                        onChange={handleToggleChange}/>
                    <label>+</label>
                </div>
            </div>
            <div className="field">
                <div className="ui slider checkbox">
                    <input 
                        type="radio" 
                        onChange={handleToggleChange}
                        checked={!checked}
                    />
                    <label>-</label>
                </div>
            </div>
        </div>
    )
}

export default Toggle