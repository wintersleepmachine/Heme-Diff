import React from 'react'

const CellDiff = ({CellDiff}) => {
    const color = (currentCell, cell) => {
        if (currentCell === cell){
            return {color: 'blue'}
        }else{
            return null
        }
    }

    const colorCounted = (count) => {
        if (count === 100){
            return {color: 'red'}
        }
    }

    return (
        <div>
            <h3 style ={colorCounted(CellDiff.keyCount)}>Cells counted: {CellDiff.keyCount}/100</h3>
            <div className='ui vertically divided grid'>
                <div className='two column row'>
                    <div className='column'>
                        <p style={color(CellDiff.currentCell, 'Neutrophil')}><strong>V - Neutrophils: {CellDiff.Neutrophil}</strong></p>
                        <p style={color(CellDiff.currentCell, 'Lymphocyte')}><strong>C - Lymphocytes: {CellDiff.Lymphocyte}</strong></p>
                        <p style={color(CellDiff.currentCell, 'Monocyte')}><strong>X - Monocytes: {CellDiff.Monocyte}</strong></p>
                        <p style={color(CellDiff.currentCell, 'Basophil')}><strong>Z - Basophils: {CellDiff.Basophil}</strong></p>
                    </div>
                    <div className="column">
                        <p style={color(CellDiff.currentCell, 'Eosinophil')}><strong>F - Eosinophils: {CellDiff.Eosinophil}</strong></p>
                        <p style={color(CellDiff.currentCell, 'IG')}><strong>D - Immature Granulocytes: {CellDiff.IG}</strong></p>
                        <p style={color(CellDiff.currentCell, 'Blast')}><strong>S - Blasts: {CellDiff.Blast}</strong></p>
                        <p style={color(CellDiff.currentCell, 'nRBC')}><strong>A - nRBC: {CellDiff.nRBC}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CellDiff