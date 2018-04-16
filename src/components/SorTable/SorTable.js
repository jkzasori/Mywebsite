import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SorTable = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


export default SorTable;
