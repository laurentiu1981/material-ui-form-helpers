export const tableDefinition = [
  {
    label: "Test simple element",
    property: "simpleElement",
    sort: {
      defaultSort: "ASC",
    },
    filter: {
      name: 'simpleElement',
      type: 'text',
      dataType: 'text',
      weight: 2,
      basicFilter: true,
    },
    name: 'simpleElement',
  },
  {
    label: "Test interval element",
    property: "intervalElement",
    sort: true,
    filter: {
      name: 'intervalElement',
      type: 'min-max',
      dataType: 'date',
      weight: 2,
    },
    name: 'intervalElement',
  },
];