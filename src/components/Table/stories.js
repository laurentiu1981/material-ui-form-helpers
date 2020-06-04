import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table';
import { withTheme } from "../../../.storybook/decorators";
import withReduxForm from "redux-form-storybook";

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

let tableDefinitionFilters = [
    {
      "label": "Name",
      "property": "name",
      "dataType": "text",
      "sort": true,
      "filter": {
        "weight": 1,
        "basicFilter": true,
        "type": "text"
      },
      "name": 'name',
    },
    {
      "label": "Number",
      "property": "number",
      "dataType": "text",
      "sort": true,
      "filter": {
        "weight": 1,
        "type": "text",
        "size": {
          "md": 5
        }
      },
      "name": 'number',
    }
  ]
;


storiesOf('Table', module)
  .addDecorator(withTheme)
  .addDecorator(withReduxForm)
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
  .add('with paginator', () => {
    return (
      <Table items={itemsList} paginator={true} autoPaginateItems={true} tableDefinition={tableDefinition}/>
    )
  })
  .add('with filter', () => {

    class Wrapper extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          itemsList: []
        }
      }

      componentDidMount() {
        this.mockedFetch({}, {page: 0, rowsPerPage: 50});
      }

      mockedFetch = (filterOptions, paginationInfo) => {
        // Filter by custom filters.
        let filterNames = Object.keys(filterOptions).filter(item => item !== 'sortPairs');
        let filterIndex, length;
        let filteredList = itemsList.filter(item => {
          for (filterIndex = 0, length = filterNames.length; filterIndex < length; filterIndex++) {
            if (item[filterNames[filterIndex]].toString().indexOf(filterOptions[filterNames[filterIndex]]) < 0) {
              return false;
            }
          }
          return true;
        });
        // Filter by pagination info.
        let pageList = filteredList.slice(paginationInfo.page * paginationInfo.rowsPerPage, (paginationInfo.page + 1) * paginationInfo.rowsPerPage);

        this.setState({
          itemsList: pageList,
          totalNumberOfEntities: filteredList.length
        })
      };

      render() {
        return (
          <Table
            filter={true}
            items={this.state.itemsList}
            totalNumberOfEntities={this.state.totalNumberOfEntities}
            paginator={true}
            tableDefinition={tableDefinitionFilters}
            fetchCallback={this.mockedFetch}
            multiSort={true}
          />
        )
      }
    }
    return (
      <Wrapper />
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
