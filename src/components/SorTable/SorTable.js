import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './SorTable.css';

const SortableItem = SortableElement(({value}) => <div className="Box">{value}</div>);

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
