import category from './category'
import produce from '../categories/produce'

let dairyProducts = category()
  .include("milk")
  .include("* milk")
  .include("cream")
  .include("* cream")
  .include("yogurt")
  .include("* yogurt")
  .include("yogurt *")
  .include("cream cheese")
  .include("sour cream")
  .include("cottage cheese")
  .include("half and half")
  .include("half & half")
  .include("butter")
  .exclude("condensed milk")

let cheeses = category()
  .include("cheese")
  .include("cheeses")
  .include("* cheese")
  .include("* cheeses")
  .include("cheese *")
  .include("cheddar")
  .include("swiss")
  .include("colby")
  .include("jack")
  .include("ricotta")
  .include("parmigiano")
  .include("reggiano")
  .include("muenster")
  .include("gouda")
  .include("romano")
  .exclude("cheese sauce")
  .exclude("cheese dip");

let eggProducts = category()
  .include("egg")
  .include("eggs");


export const defaultCategories = {
  "Produce": produce,
  "Meat": {
    includePatterns: [ 
      "chicken", "chickens", "beef", "steak", "pork", "turkey", "turkeys", "meat", "meats", "roast", "roasts", "duck", 
      "goose", "quail", "carp", "catfish", "salmon", "tilapia", "herring", "fish", "lobster", "lobsters", 
      "shrimp", "mussel", "mussels", "prawn", "prawns", "oysters"
    ], 
    excludePatterns: [ "bouillon" ]
  },
  "Breads/Baked Goods": {
    includePatterns: [ 
      "bread", "* bread", "breads", "* breads", "tortilla", "* tortilla", "tortillas", "* tortillas",
      "wrap", "* wrap", "wraps", "* wraps", "pita", "* pita", "pitas", "* pitas",
      "muffin", "muffins", "* muffin", "* muffins", "bun", "* bun", "buns", "* buns",
      "roll", "* roll", "rolls", "* rolls"
    ], 
    excludePatterns: [ "cinnamon rolls" ]
  },
  "Canned/Jarred Goods": {
    includePatterns: [ 
      "can *", "canned *", "cans *", "jar *", "jarred *", "jars *", 
      "can * *", "canned * *", "cans * *", "jar * *", "jarred * *", "jars * *", 
      "diced tomato", "crushed tomato", "tomato sauce", 
      "* broth", "soup", "soups", "* soup", "* soups", 
      "stock", "* stock", "olive", "olives", "* bouillon",
      "pickles", "* pickles", "tomato paste", 
    ], 
    excludePatterns: []
  },
  "Coffee/Hot Beverages": {
    includePatterns: [
      "coffee", "keurig", "keurig *", "* keurig", "expresso", "espresso",
      "kcups", "k-cups", "passion tea", "hot chocolate"
    ],
    excludePatterns: []
  },
  "Fats/Oils": {
    includePatterns: [
      "* oil"
    ],
    excludePatterns: []
  },
  "Pasta/Grains": {
    includePatterns: [
      "past", "* pasta", "spaghetti", "penne", "linguini", "rice"
    ],
    excludePatterns: [ ]
  },
  "Condiments/Dressings": {
    includePatterns: [ 
      "ketchup", "mustard", "* mustard", "relish", "* sauce", "* sauces", 
      "mayo", "* mayo", "mayonnaise", "* mayonnaise", "mayonaise", "* mayonaise", 
      "* dressing", "jam", "* jam", "jelly", "* jelly", "vinegar"
    ], 
    excludePatterns: [ "tomato sauce", "pasta sauce", "alfredo sauce" ]
  },
  "Spices/Herbs": {
    includePatterns: [ 
      "allspice", "all spice", "spice", "spices", "anise", "basil", "bay leaf", "bay leaves", "caraway", "cardamom", "cayenne", 
      "black pepper", "teaspoon pepper", "tsp pepper", "tsp. pepper", "tablespoon pepper", "tbsp pepper", "tbsp. pepper", 
      "celery seed", "chicory", "chili powder", "garlic", "chive", "chives", "cilantro", "cinnamon", "clove", "coriander", 
      "cumin", "curry", "dill", "fennel", "fenugreek", "ginger", "lavender", "marjoram", "mint", "mustard", "nutmeg", 
      "oregano", "paprika", "parsley", "rosemary", "saffron", "sage", "safflower", "tarragon", "thyme", "turmeric", 
      "vanilla", "salt", "powder", "dried onion", "dried minced onion", "pepper to taste", "salt to taste", 
      "seasoning", "seasonings", "* seasoning", "* seasonings", "black pepper", "ground pepper", "amarillo pepper",
      "mustard seed", "mustard seeds", "peppercorns"
    ], 
    excludePatterns: [ "fresh", "diced", "chopped", "* cloves", "cloves *", "bunch", "knob"]
  },
  "Baking Goods": {
    includePatterns: [
      "sugar", "* sugar", "molasses"
    ],
    excludePatterns: []
  },
  "Frozen Goods": {
    includePatterns: [ 
      "frozen *", "freezer *", "* thawed", "thawed *", "ice cream", "* ice cream",
      "breakfast sandwiches"
    ], 
    excludePatterns: []
  },
  "Dairy": category()
    .includeCategory(dairyProducts)
    .includeCategory(cheeses)
    .includeCategory(eggProducts),
  "Cereals": {
    includePatterns: [
      "* cereal", "cereal *", "oatmeal", "oats", "* oatmeal", "* oats", "granola",
      "honey bunches of oats", "lucky charms", "frosted flakes", "pops", "frosted mini wheats",
      "quaker", "fruity pebbles", "cocoa pebbles", "cookie crisp", "cinnamon toast cruch", "kashi"
    ],
    excludePatterns: []
  },
  "Snacks/Chips": {
    includePatterns: [
      "* chips", "chips", "doritos", "fritos", "cheetos", "crackers", "cookies", "rice cakes",
      "cheese sauce", "cheese dip", "queso dip", "queso", "nuts", "peanuts", "freetos"
    ],
    excludePatterns: [
      "chocolate chips"
    ]
  },
  "Beverages": {
    includePatterns: [ 
      "pop", "* pop", "soda", "* soda", "sodas", "* sodas", "bottled watter", "flavored water", 
      "fizzy water", "selzer", "selzter", "fizzies", "fizzy", "carbonated *",
      "juice", "* juice", "tea", "* tea", "coke", "* coke", "sprite", "dr pepper", "drink", "* drink",
      "root beer", "rootbeer", "kool aid", "juice boxes", "capri sun"
    ], 
    excludePatterns: [ 
      "orange", "lime juice", "juice * lime", "limes", "zest",
      "kcups", "k-cups", "kcup", "k-cup", "coffee", "keurig", "passion tea"
    ]
  },
  "Refrigerated Beverages": {
    includePatterns: [
      "orange juice", "lemonade", "* lemonade", "cold coffee", "cold brew"
    ],
    excludePatterns: []
  },
  "Alcohol": {
    includePatterns: [ 
      "beer", "beers", "wine", "vodka", "moscato", "chardonay", "pino grigio", "merlot", "vodka", "rum", 
      "margarita", "tequila", "whisky", "whiskey", "bourbon", "palo santo", "dogfish", "great lakes *",
      "bells *", "fat heads *"
    ], 
    excludePatterns: [ "vinegar", "cooking", "rootbeer", "root beer" ]
  },
  "Pet Supplies": {
    includePatterns: [
      "cat", "dog", "pet", "cat food", "dog food", "* cat food", "* dog food", 
      "* pet food", "pet treats", "dog treats", "cat treats", "cat litter", "litter genie"
    ],
    excludePatterns: []
  },
  "Household Goods": {
    includePatterns: [
      "toilet paper", "paper towels", "* cleaner", "laundry", "paper plates", "napkins", "drano"
    ],
    excludePatterns: []
  },
  "Baby Supplies": {
    includePatterns: [
      "diapers", "bibs", "wipes", "baby wipes", "baby *"
    ],
    excludePatterns: []
  },
  "Personal Care": {
    includePatterns: [
      "toothpaste", "shaving cream", "shaving *", "razors", "shampoo", "conditioner", "soap", 
      "toothbrush", "tooth brush", "tooth brushes",
      "hair *", "* hair", "bath *", "* bath", "lotion", "facial wash"
    ],
    excludePatterns: []
  },
  "Other": {
    includePatterns: [], 
    excludePatterns: [] 
  }
}
