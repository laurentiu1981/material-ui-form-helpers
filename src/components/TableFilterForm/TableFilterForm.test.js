import React from 'react';
import { combineReducers, createStore } from 'redux';
import {fireEvent, render} from '@testing-library/react'
import {reducer as form} from 'redux-form';
import TableFilterForm from './TableFilterForm';
import {Provider} from "react-redux";
import '@testing-library/jest-dom/extend-expect';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {tableDefinition} from "./__mocks__/tableDefinitionMock";

const theme = createMuiTheme({});

const defaultSortsMock = (tableDefinition) => {
  return tableDefinition.filter((field) => field.hasOwnProperty('sort') && field.sort.hasOwnProperty('defaultSort')).map((field) => {
    return {
      fieldName: {value: field.name, label: field.label},
      direction: {value: field.sort.defaultSort, label: field.sort.defaultSort},
    };
  });
};

describe('TableFilterForm Tests', () => {

  let store;

  beforeEach(() => {
    store = createStore(combineReducers({form}));
  });

  test('Table Filter Form - submit', (done) => {

    const onSubmitPropMock = jest.fn().mockImplementation(() => {
      return {};
    });

    const utils = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <TableFilterForm onSubmit={onSubmitPropMock} tableDefinition={tableDefinition}
                           defaultSort={defaultSortsMock(tableDefinition)}/>
        </MuiThemeProvider>
      </Provider>
    );

    // default filter field
    const defaultFilterField = utils.getByText('Test simple element');
    expect(defaultFilterField).toBeInTheDocument();

    // chip for default filter
    let defaultSortChip = utils.getByText('Test simple element: ASC');
    expect(defaultSortChip).toBeInTheDocument();

    const simpleElementInput = utils.container.querySelector('input[name="simpleElement"]');
    fireEvent.change(simpleElementInput, {target: {value: 'testInputSimpleElement'}});
    expect(simpleElementInput).toMatchSnapshot();
    expect(simpleElementInput.value).toBe('testInputSimpleElement');

    // display advanced filters
    fireEvent.click(utils.getByText('Advanced Filters'));

    const intervalElementMin = utils.container.querySelector('input[name="intervalElement_min"]');
    fireEvent.change(intervalElementMin, {target: {value: "1"}});
    expect(intervalElementMin).toMatchSnapshot();
    expect(intervalElementMin.value).toBe("1");

    const intervalElementMax = utils.container.querySelector('input[name="intervalElement_max"]');
    fireEvent.change(intervalElementMax, {target: {value: "10"}});
    expect(intervalElementMax).toMatchSnapshot();
    expect(intervalElementMax.value).toBe("10");

    const formComponent = utils.container.querySelector('form');

    fireEvent.submit(formComponent);
    expect(onSubmitPropMock).toHaveBeenCalled();

    // hide advanced filters
    fireEvent.click(utils.getByText('Advanced Filters'));

    setTimeout(() => {
      // check chips values
      const chipSimpleElementFilter = utils.queryByText("simpleElement: testInputSimpleElement");
      expect(chipSimpleElementFilter).toBeInTheDocument();
      const chipIntervalElementMin = utils.queryByText("intervalElement_min: 1");
      expect(chipIntervalElementMin).toBeInTheDocument();
      const chipIntervalElementMax = utils.queryByText("intervalElement_max: 10");
      expect(chipIntervalElementMax).toBeInTheDocument();
      const defaultSortChip = utils.queryByText('Test simple element: ASC');
      expect(defaultSortChip).toBeInTheDocument();
      done();
    }, 1000);
  });

  test('Table Filter Form - submit & cancel', (done) => {

    const onSubmitPropMock = jest.fn().mockImplementation(() => {
      return {};
    });

    const onCancelPropMock = jest.fn().mockImplementation(() => {
      return {};
    });

    const utils = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <TableFilterForm onSubmit={onSubmitPropMock} tableDefinition={tableDefinition}
                           defaultSort={defaultSortsMock(tableDefinition)} onCancel={onCancelPropMock}/>
        </MuiThemeProvider>
      </Provider>
    );

    const simpleElementInput = utils.container.querySelector('input[name="simpleElement"]');
    fireEvent.change(simpleElementInput, {target: {value: 'testInputSimpleElement'}});
    expect(simpleElementInput).toMatchSnapshot();
    expect(simpleElementInput.value).toBe('testInputSimpleElement');

    // display advanced filters
    fireEvent.click(utils.getByText('Advanced Filters'));

    const intervalElementMin = utils.container.querySelector('input[name="intervalElement_min"]');
    fireEvent.change(intervalElementMin, {target: {value: "1"}});
    expect(intervalElementMin).toMatchSnapshot();
    expect(intervalElementMin.value).toBe("1");

    const intervalElementMax = utils.container.querySelector('input[name="intervalElement_max"]');
    fireEvent.change(intervalElementMax, {target: {value: "10"}});
    expect(intervalElementMax).toMatchSnapshot();
    expect(intervalElementMax.value).toBe("10");

    const formComponent = utils.container.querySelector('form');

    fireEvent.submit(formComponent);
    expect(onSubmitPropMock).toHaveBeenCalled();

    // hide advanced filters
    fireEvent.click(utils.getByText('Advanced Filters'));

    setTimeout(() => {

      // check chips values
      let chipSimpleElement = utils.queryByText("simpleElement: testInputSimpleElement");
      expect(chipSimpleElement).toBeInTheDocument();
      let chipIntervalElementMin = utils.queryByText("intervalElement_min: 1");
      expect(chipIntervalElementMin).toBeInTheDocument();
      let chipIntervalElementMax = utils.queryByText("intervalElement_max: 10");
      expect(chipIntervalElementMax).toBeInTheDocument();
      let defaultSortChip = utils.queryByText("Test simple element: ASC");
      expect(defaultSortChip).toBeInTheDocument();

      // clear fields & delete chips
      fireEvent.click(utils.getByText('Cancel'));

      // display advanced filters
      fireEvent.click(utils.getByText('Advanced Filters'));

      // check clear fields
      const simpleElementInput = utils.container.querySelector('input[name="simpleElement"]');
      expect(simpleElementInput).toMatchSnapshot();
      expect(simpleElementInput.value).toBe('');
      const intervalElementMin = utils.container.querySelector('input[name="intervalElement_min"]');
      expect(intervalElementMin).toMatchSnapshot();
      expect(intervalElementMin.value).toBe('');
      const intervalElementMax = utils.container.querySelector('input[name="intervalElement_max"]');
      expect(intervalElementMax).toMatchSnapshot();
      expect(intervalElementMax.value).toBe('');

      // hide advanced filters
      fireEvent.click(utils.getByText('Advanced Filters'));

      // check delete chips
      chipSimpleElement = utils.queryByText("simpleElement: testInputSimpleElement");
      expect(chipSimpleElement).toBeNull();
      chipIntervalElementMin = utils.queryByText("intervalElement_min: 1");
      expect(chipIntervalElementMin).toBeNull();
      chipIntervalElementMax = utils.queryByText("intervalElement_max: 10");
      expect(chipIntervalElementMax).toBeNull();
      defaultSortChip = utils.queryByText("Test simple element: ASC");
      expect(defaultSortChip).toBeNull();

      done();
    }, 1000);
  });

  test('Table Filter Form - add & remove sort pair', () => {

    const onSubmitPropMock = jest.fn().mockImplementation(() => {
      return {};
    });

    const utils = render(
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <TableFilterForm onSubmit={onSubmitPropMock} tableDefinition={tableDefinition}
                           defaultSort={defaultSortsMock(tableDefinition)}/>
        </MuiThemeProvider>
      </Provider>
    );

    // display advanced filters
    fireEvent.click(utils.getByText('Advanced Filters'));

    const intervalElementMin = utils.container.querySelector('input[name="intervalElement_min"]');
    fireEvent.change(intervalElementMin, {target: {value: "1"}});
    expect(intervalElementMin).toMatchSnapshot();
    expect(intervalElementMin.value).toBe("1");

    const intervalElementMax = utils.container.querySelector('input[name="intervalElement_max"]');
    fireEvent.change(intervalElementMax, {target: {value: "10"}});
    expect(intervalElementMax).toMatchSnapshot();
    expect(intervalElementMax.value).toBe("10");

    var elementsWithFormItemClass = utils.container.querySelectorAll(".form-item");
    var lengthElementsWithFormItemClass = elementsWithFormItemClass.length;

    //add a new sort pair
    var addIcon = utils.container.querySelector('div[class="add-new-sort-pair"] svg');
    expect(addIcon).toMatchSnapshot();
    fireEvent.click(addIcon);

    //check if the new sort pair was added
    elementsWithFormItemClass = utils.container.querySelectorAll(".form-item");
    expect(elementsWithFormItemClass.length).toBe(lengthElementsWithFormItemClass+2);

    //remove added sort pair
    var deleteIcon = utils.container.querySelector('svg[class="MuiSvgIcon-root undefined-sort-pair-clear-icon"]');
    fireEvent.click(deleteIcon);

    //check if deleted
    elementsWithFormItemClass = utils.container.querySelectorAll(".form-item");
    expect(elementsWithFormItemClass.length).toBe(lengthElementsWithFormItemClass);

    const formComponent = utils.container.querySelector('form');

    fireEvent.submit(formComponent);
    expect(onSubmitPropMock).toHaveBeenCalled();
  });

});
