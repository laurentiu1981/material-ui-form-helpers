import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { withTheme } from "../../../.storybook/decorators";

let itemsObject = {};
let itemsList = [];
let item;
let n = 0;
while (n++ < 100) {
  item = {
    name: `Name${n}`,
    number: n,
    username: `username${n}`,
  };
  itemsObject[n] = item;
  itemsList.push(item);
}

let tableDefinition = [
    {
      "label": "Name",
      "property": "name"
    },
    {
      "label": "Number",
      "property": "number"
    }
  ]
;

let tableDefinition3Col = [
    {
      "label": "Name",
      "property": "name"
    },
    {
      "label": "Number",
      "property": "number"
    },
    {
      "label": "Username",
      "property": "username"
    }
  ]
;

let tableDefinitionOneCol = [
    {
      "label": "Name",
      "property": "name"
    },
  ]
;


storiesOf('Table', module)
  .addDecorator(withTheme)
  .add('array, no table definition', () => {
    return (
      <Table items={itemsList}/>
    )
  })
  .add('array, table definition', () => {
    return (
      <Table items={itemsList} tableDefinition={tableDefinition}/>
    )
  })
  .add('object, no table definition', () => {
    return (
      <Table items={itemsObject}/>
    )
  })
  .add('object, table definition', () => {
    return (
      <Table items={itemsObject} tableDefinition={tableDefinition}/>
    )
  })
  .add('object, table definition one col', () => {
    return (
      <Table items={itemsObject} tableDefinition={tableDefinitionOneCol}/>
    )
  })
  .add('object, table definition one col, section label', () => {
    return (
      <Table items={itemsObject} tableDefinition={tableDefinitionOneCol} sectionLabel={"Section Label"}/>
    )
  })
  .add('table with section label', () => {
    return (
      <Table items={itemsObject} tableDefinition={tableDefinitionOneCol} sectionLabel={"Section Label"}/>
    )
  })
  .add('table loading with elements', () => {
    return (
      <Table items={itemsList} tableDefinition={tableDefinitionOneCol} reloading sectionLabel={"Section Label"}/>
    )
  })
  .add('table loading without elements', () => {
    return (
      <Table items={[]} tableDefinition={tableDefinitionOneCol} reloading sectionLabel={"Section Label"}/>
    )
  })
  .add('3 col section Label', () => {
    return (
      <Table items={itemsList} tableDefinition={tableDefinition3Col} sectionLabel={"Section Label"}/>
    )
  })
  .add('3 col, no elements, section Label', () => {
    return (
      <Table items={[]} tableDefinition={tableDefinition3Col} sectionLabel={"Section Label"}/>
    )
  })
;