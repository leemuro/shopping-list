import categorizeItem from './categorizer'

it('matches item if is a matcher word', () => {
  let categories = {
    "Produce": { 
      match: [ "apple" ], 
      exclude: [] 
    }
  }
  let items = categorizeItem(categories, {}, { description: "apple" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('matches item if is contains a matcher word', () => {
  let categories = {
    "Produce": { 
      match: [ "apple" ], 
      exclude: [] 
    }
  }
  let items = categorizeItem(categories, {}, { description: "apple slices" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('does not match item if it cointains a matcher word as a substring of another word', () => {
  let categories = {
    "Produce": { 
      match: [ "apple" ], 
      exclude: [] 
    }
  }
  let items = categorizeItem(categories, {}, { description: "applesauce" }, 1)
  expect(items).toEqual({ "Produce": [] })
});

it('does not match item if it contains an exclusion word', () => {
  let categories = {
    "Produce": { 
      match: [ "apple" ], 
      exclude: [ "juice" ] 
    }
  }
  let items = categorizeItem(categories, {}, { description: "apple juice" }, 1)
  expect(items).toEqual({ "Produce": [] })
});

it('matches a fallthrough/other category if no other categories matched', () => {
  let categories = {
    "Produce": { 
      match: [ "apple" ], 
      exclude: [] 
    },
    "Other": {
      match: [],
      exclude: []
    }
  }
  let items = categorizeItem(categories, {}, { description: "bananas" }, 1)
  expect(items).toEqual({ "Produce": [], "Other": [1] })
});
