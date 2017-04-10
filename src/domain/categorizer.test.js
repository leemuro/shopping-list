import categorizeItem from './categorizer'

const testCategories = {
  "Produce": { 
    match: [ "apple" ], 
    exclude: [ "juice" ] 
  }
}

it('matches item if is a matcher word', () => {
  let items = categorizeItem(testCategories, {}, { description: "apple" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('matches item if is contains a matcher word', () => {
  let items = categorizeItem(testCategories, {}, { description: "apple slices" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('does not match item if it contains an exclusion word', () => {
  let items = categorizeItem(testCategories, {}, { description: "apple juice" }, 1)
  expect(items).toEqual({ "Produce": [] })
});
