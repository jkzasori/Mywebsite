import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './SorTable.css';
import {ProgressBar} from 'react-bootstrap';
const SortableItem = SortableElement(({value}) =>  <div className="Box"><ProgressBar bsStyle="success" now={75} label={`75%`}/>{value}</div>);

const SorTable = SortableContainer(({items}) => {
  return (
    <div className="ContentBox">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});


export default SorTable;
