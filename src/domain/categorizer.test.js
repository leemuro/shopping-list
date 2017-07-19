import category from './category'
import categorizeItem from './categorizer'

it('includes item if is an included pattern word', () => {
  let categories = {
    "Produce": category().include("apple")
  };
  let items = categorizeItem(categories, {}, { description: "apple" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('includes item if is contains an included pattern word', () => {
  let categories = {
    "Produce": category().include("apple")
  };
  let items = categorizeItem(categories, {}, { description: "apple slices" }, 1)
  expect(items).toEqual({ "Produce": [1] })
});

it('does not include item if it cointains an included pattern word as a substring of another word', () => {
  let categories = {
    "Produce": category().include("apple")
  };
  let items = categorizeItem(categories, {}, { description: "applesauce" }, 1)
  expect(items).toEqual({ "Produce": [] })
});

it('does not include item if it contains an exclusion pattern word', () => {
  let categories = {
    "Produce": category().include("apple").exclude("juice")
  };
  let items = categorizeItem(categories, {}, { description: "apple juice" }, 1)
  expect(items).toEqual({ "Produce": [] })
});

it('included in a fallthrough/other category if not included in other categories', () => {
  let categories = {
    "Produce": category().include("apple"),
    "Other": category()
  };
  let items = categorizeItem(categories, {}, { description: "bananas" }, 1)
  expect(items).toEqual({ "Produce": [], "Other": [1] })
});

it('included in a fallthrough/other category if included in another categoy, but also excluded', () => {
  let categories = {
    "Produce": category().include("grape").exclude("jelly"),
    "Other": category()
  };
  let items = categorizeItem(categories, {}, { description: "grape jelly" }, 1)
  expect(items).toEqual({ "Produce": [], "Other": [1] })
});

it('included in the category with highest pattern score', () => {
  let categories = {
    "Produce": category().include("raspberry"),
    "Condiments": category().include("* jelly")
  };
  let items = categorizeItem(categories, {}, { description: "raspberry jelly" }, 1)
  expect(items).toEqual({ "Produce": [], "Condiments": [1] })
});