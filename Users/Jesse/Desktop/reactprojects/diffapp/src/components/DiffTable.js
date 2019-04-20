import React from 'react'
import { Table } from 'semantic-ui-react'

class DiffTable extends React.Component {
  getArrowAbs = (wbc, result) => {
    if(wbc === 'neutrophil'){
      if(result > 7){
        return <i className="arrow up icon" />
      }else if(result < 2){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'lymphocyte'){
      if(result > 3){
        return <i className="arrow up icon" />
      }else if(result < 1){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'monocyte'){
      if(result > 1){
        return <i className="arrow up icon" />
      }else if(result < 0.2){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'eosinophil'){
      if(result > 0.5){
        return <i className="arrow up icon" />
      }else if(result < 0.02){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'basophil'){
      if(result > 1){
        return <i className="arrow up icon" />
      }else if(result < 0.02){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'IG'){
      if(result > 0.03){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'blast'){
      if(result > 0){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'nRBC'){
      if(result > 0){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }
  }

  genArrowRel = (wbc, result) => {
    if(wbc === 'neutrophil'){
      if(result > 80){
        return <i className="arrow up icon" />
      }else if(result < 40){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'lymphocyte'){
      if(result > 40){
        return <i className="arrow up icon" />
      }else if(result < 20){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'monocyte'){
      if(result > 10){
        return <i className="arrow up icon" />
      }else if(result < 2){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'eosinophil'){
      if(result > 6){
        return <i className="arrow up icon" />
      }else if(result < 1){
        return <i className="arrow down icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'basophil'){
      if(result > 2){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'IG'){
      if(result > 1){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'blast'){
      if(result > 0){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }

    if(wbc === 'nRBC'){
      if(result > 0){
        return <i className="arrow up icon" />
      }else {
        return null;
      }
    }



  }

  render (){
    const {state} = this.props

    const absNeut = ((state.Neutrophil/100) * state.totalWBC).toFixed(2)
    const relNeut = state.Neutrophil

    const absLymph = ((state.Lymphocyte/100) * state.totalWBC).toFixed(2)
    const relLymph = state.Lymphocyte

    const absMono = ((state.Monocyte/100) * state.totalWBC).toFixed(2)
    const relMono = state.Monocyte

    const absEos = ((state.Eosinophil/100) * state.totalWBC).toFixed(2)
    const relEos = state.Eosinophil

    const absBaso = ((state.Basophil/100) * state.totalWBC).toFixed(2)
    const relBaso = state.Basophil

    const absIG = ((state.IG/100) * state.totalWBC).toFixed(2)
    const relIG = state.IG

    const absBlast = ((state.Blast/100) * state.totalWBC).toFixed(2)
    const relBlast = state.Blast

    const absnRBC = ((state.nRBC/100) * state.totalWBC).toFixed(2)
    const relnRBC = state.nRBC

    return (
    <Table inverted celled columns={5} selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>Abs x 10<sup>9</sup>/L</Table.HeaderCell>
          <Table.HeaderCell>Rel %</Table.HeaderCell>
          <Table.HeaderCell>Reference Range (Abs) x 10<sup>9</sup>/L</Table.HeaderCell>
          <Table.HeaderCell>Reference Range Rel (%)</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        <Table.Row>
          <Table.Cell>Neutrophils</Table.Cell>
          <Table.Cell>{absNeut} x 10<sup>9</sup>/L {this.getArrowAbs('neutrophil', absNeut)}</Table.Cell>
          <Table.Cell>{relNeut} % {this.genArrowRel('neutrophil', relNeut)}</Table.Cell>
          <Table.Cell>2.00 - 7.00</Table.Cell>
          <Table.Cell>40 - 80</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Lymphocytes</Table.Cell>
          <Table.Cell>{absLymph} x 10<sup>9</sup>/L {this.getArrowAbs('lymphocyte', absLymph)}</Table.Cell>
          <Table.Cell>{relLymph} % {this.genArrowRel('lymphocyte', relLymph)}</Table.Cell>
          <Table.Cell>1.00 - 3.00</Table.Cell>
          <Table.Cell>20 - 40</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Monocytes</Table.Cell>
          <Table.Cell>{absMono} x 10<sup>9</sup>/L {this.getArrowAbs('monocyte', absMono)}</Table.Cell>
          <Table.Cell>{relMono} % {this.genArrowRel('monocyte', relMono)}</Table.Cell>
          <Table.Cell>0.20 - 1.00</Table.Cell>
          <Table.Cell>2 - 10</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Eosinophils</Table.Cell>
          <Table.Cell>{absEos} x 10<sup>9</sup>/L {this.getArrowAbs('eosinophil', absEos)}</Table.Cell>
          <Table.Cell>{relEos} % {this.genArrowRel('eosinophil', relEos)}</Table.Cell>
          <Table.Cell>0.02 - 0.50</Table.Cell>
          <Table.Cell>1 - 6</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Basophils</Table.Cell>
          <Table.Cell>{absBaso} x 10<sup>9</sup>/L {this.getArrowAbs('basophil', absBaso)}</Table.Cell>
          <Table.Cell>{relBaso} % {this.genArrowRel('basophil', relBaso)}</Table.Cell>
          <Table.Cell>0.02 - 1.00</Table.Cell>
          <Table.Cell>0 - 2</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Immature Grans</Table.Cell>
          <Table.Cell>{absIG} x 10<sup>9</sup>/L {this.getArrowAbs('IG', absIG)}</Table.Cell>
          <Table.Cell>{relIG} % {this.genArrowRel('IG', relIG)}</Table.Cell>
          <Table.Cell>0.00 - 0.03</Table.Cell>
          <Table.Cell>0 - 1</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Blasts</Table.Cell>
          <Table.Cell>{absBlast} x 10<sup>9</sup>/L {this.getArrowAbs('blast', absBlast)}</Table.Cell>
          <Table.Cell>{relBlast} % {this.genArrowRel('blast', relBlast)}</Table.Cell>
          <Table.Cell>N/A</Table.Cell>
          <Table.Cell>N/A</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Nucleated RBC</Table.Cell>
          <Table.Cell>{absnRBC} x 10<sup>9</sup>/L {this.getArrowAbs('nRBC', absnRBC)}</Table.Cell>
          <Table.Cell>{relnRBC} % {this.genArrowRel('nRBC', relnRBC)}</Table.Cell>
          <Table.Cell>N/A</Table.Cell>
          <Table.Cell>N/A</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    )
  }
}

export default DiffTable