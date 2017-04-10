import categorizeItem from './categorizer'
import { defaultCategories } from './defaultCategories'

const masterTest = [
  { item: "banana", category: "Produce" },
  { item: "steak", category: "Meat" }
]

it('categorizes all items correctly', () => {
  masterTest.forEach((i) => {
    let items = categorizeItem(defaultCategories, {}, { description: i.item }, i.item)
    Object.keys(items).forEach((c) => {
      if(c == i.category)
        expect(items[c]).toEqual([i.item])
      else
        expect(items[c]).toEqual([])
    })
  })
})
