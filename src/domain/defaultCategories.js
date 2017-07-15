export const defaultCategories = {
  "Produce": {
    match: [ 
      "asparagus", "arugula", "cabbage", "bean", "beans", "garlic", "beet", "beets", "onion", "onions", "bok choy", "dill", 
      "basil", "rosemary", "lettuce", "broccoli", "pea", "peas", "radish", "radishes", "rhubarb", "carrot", "carrots", 
      "spinach", "cauliflower", "cucumber", "cucumbers", "chard", "spinach", "eggplant", "greens", "turnip", "turnips", 
      "watercress", "endive", "escarole", "herbs", "leek", "leeks", "kale", "chive", "chives", "okra", "cilantro", "pepper", "peppers", 
      "potato", "potatos", "potatoes", "mizuna", "corn", "tomato", "tomatoes", "watermelon", "watermelons", "melon", "melons", 
      "thyme", "zucchini", "zucchinis", "squash", "rutabaga", "apple", "apples", "apricot", "apricots", "avocado", "avocados",
      "avacado", "avacados", "banana", "bananas", "bilberry", "bilberries", "blackberry", "blackberries", 
      "blackcurrant", "blueberry", "blueberries", "berries", "boysenberry", "boysenberries", "currant", "cherry", "cherries", 
      "cherimoya", "cloudberry", "cloudberries", "coconut", "coconuts", "cranberry", "cranberries", "damson", "date", "dates", 
      "dragonfruit", "dragonfruits", "durian", "elderberry", "elderberries", "feijoa", "fig", "figs", "goji", "berry", "gooseberry",
      "gooseberries" , "grape", "grapes", "raisin", "raisins", "grapefruit", "grapefruits", "guava", "honeyberry", "huckleberry", 
      "jabuticaba", "jackfruit", "jambul", "jujube", "kiwifruit", "kumquat", "lemon", "lime", "loquat", "longan", "lychee", "mango", 
      "marionberry", "melon", "melons", "cantaloupe", "cataloupes", "honeydew", "honeydews", "watermelon", "watermelons", "fruit", 
      "fruits", "mulberry", "mulberries", "nectarine", "nectarines", "nance", "orange", "oranges", "clementine", "clementines", 
      "mandarine", "mandarins", "tangerine", "tangerines", "papaya", "passionfruit", "peach", "peaches", "pear", "pears", 
      "persimmon", "physalis", "plantain", "plum", "plums", "prune", "prunes", "pineapple", "pineapples", "plumcot", "pomegranate", 
      "pomegranates", "pomelo", "quince", "raspberry", "raspberries", "salmonberry", "salmonberries", "rambutan", "redcurrant", 
      "salak", "satsuma", "strawberry", "strawberries", "tamarillo", "tamarind", "yuzu", "romaine", "celery", "lime", "limes",
      "jalapeño", "jalapeños", "chilies", "chilis", "* zest", "zest *", "scallions", "ginger"
    ], 
    exclude: [ 
      "dried", "dry", "powder", "ground", "paste"
    ]
  },
  "Meat": {
    match: [ 
      "chicken", "chickens", "beef", "steak", "pork", "turkey", "turkeys", "meat", "meats", "roast", "roasts", "duck", 
      "goose", "quail", "carp", "catfish", "salmon", "tilapia", "herring", "fish", "lobster", "lobsters", 
      "shrimp", "mussel", "mussels", "prawn", "prawns", "oysters"
    ], 
    exclude: [ "bouillon" ]
  },
  "Breads/Baked Goods": {
    match: [ 
      "bread", "* bread", "breads", "* breads", "tortilla", "* tortilla", "tortillas", "* tortillas",
      "wrap", "* wrap", "wraps", "* wraps", "pita", "* pita", "pitas", "* pitas",
      "muffin", "muffins", "* muffin", "* muffins", "bun", "* bun", "buns", "* buns",
      "roll", "* roll", "rolls", "* rolls"
    ], 
    exclude: [ "cinnamon rolls" ]
  },
  "Canned/Jarred Goods": {
    match: [ 
      "can *", "canned *", "cans *", "jar *", "jarred *", "jars *", 
      "can * *", "canned * *", "cans * *", "jar * *", "jarred * *", "jars * *", 
      "diced tomato", "crushed tomato", "tomato sauce", 
      "* broth", "soup", "soups", "* soup", "* soups", 
      "stock", "* stock", "olive", "olives", "* bouillon",
      "pickles", "* pickles", "tomato paste", 
    ], 
    exclude: []
  },
  "Fats/Oils": {
    match: [
      "* oil"
    ],
    exclude: []
  },
  "Pasta/Grains": {
    match: [
      "past", "* pasta", "spaghetti", "penne", "linguini", "rice"
    ],
    exclude: [ ]
  },
  "Condiments/Dressings": {
    match: [ 
      "ketchup", "mustard", "* mustard", "relish", "* sauce", "* sauces", 
      "mayo", "* mayo", "mayonnaise", "* mayonnaise", "mayonaise", "* mayonaise", 
      "* dressing", "jam", "* jam", "jelly", "* jelly", "vinegar"
    ], 
    exclude: [ "tomato sauce", "pasta sauce", "alfredo sauce" ]
  },
  "Spices/Herbs": {
    match: [ 
      "allspice", "all spice", "spice", "spices", "anise", "basil", "bay leaf", "bay leaves", "caraway", "cardamom", "cayenne", 
      "black pepper", "teaspoon pepper", "tsp pepper", "tsp. pepper", "tablespoon pepper", "tbsp pepper", "tbsp. pepper", 
      "celery seed", "chicory", "chili powder", "garlic", "chive", "chives", "cilantro", "cinnamon", "clove", "coriander", 
      "cumin", "curry", "dill", "fennel", "fenugreek", "ginger", "lavender", "marjoram", "mint", "mustard", "nutmeg", 
      "oregano", "paprika", "parsley", "rosemary", "saffron", "sage", "safflower", "tarragon", "thyme", "turmeric", 
      "vanilla", "salt", "powder", "dried onion", "dried minced onion", "pepper to taste", "salt to taste", 
      "seasoning", "seasonings", "* seasoning", "* seasonings", "black pepper", "ground pepper", "amarillo pepper",
      "mustard seed", "mustard seeds", "peppercorns"
    ], 
    exclude: [ "fresh", "diced", "chopped", "* cloves", "cloves *", "bunch", "knob"]
  },
  "Baking Goods": {
    match: [
      "sugar", "* sugar", "molasses"
    ],
    exclude: []
  },
  "Frozen Goods": {
    match: [ "frozen *", "freezer *", "* thawed", "thawed *", "ice cream", "* ice cream" ], 
    exclude: []
  },
  "Dairy": {
    match: [ 
      "egg", "eggs", "milk", "* milk", "cream", "cheese", "cheeses", "* cheese", "* cheeses", 
      "yogurt", "yogurts", "cheddar", "swiss", "butter", 
      "jack", "colby", "half and half", "half & half" , "ricotta",
      "parmigiano", "reggiano", "romano"
    ], 
    exclude: [ "condensed milk", "cheese sauce" ]
  },
  "Snacks/Chips": {
    match: [
      "* chips", "chips", "doritos", "fritos", "cheetos", "crackers", "cookies", "rice cakes",
      "cheese sauce", "cheese dip", "queso dip", "queso", "nuts", "peanuts"
    ],
    exclude: [
      "chocolate chips"
    ]
  },
  "Beverages": {
    match: [ 
      "pop", "* pop", "soda", "* soda", "sodas", "* sodas", "bottled watter", "flavored water", 
      "fizzy water", "selzer", "selzter", "fizzies", "fizzy", "carbonated *",
      "juice", "* juice", "tea", "* tea", "coke", "* coke", "sprite", "dr pepper", "drink", "* drink",
      "root beer"
    ], 
    exclude: [ "orange", "lime juice", "juice * lime", "limes", "zest" ]
  },
  "Refrigerated Beverages": {
    match: [
      "orange juice", "lemonade", "* lemonade", "cold coffee", "cold brew"
    ],
    exclude: []
  },
  "Alcohol": {
    match: [ 
      "beer", "beers", "wine", "vodka", "moscato", "chardonay", "pino grigio", "merlot", "vodka", "rum", 
      "margarita", "tequila", "whisky", "whiskey", "bourbon"
    ], 
    exclude: [ "vinegar", "cooking" ]
  },
  "Pet Supplies": {
    match: [
      "cat", "dog", "pet", "cat food", "dog food", "* cat food", "* dog food", 
      "* pet food", "pet treats", "dog treats", "cat treats", "cat litter", "litter genie"
    ],
    exclude: []
  },
  "Household Goods": {
    match: [
      "toilet paper", "paper towels", "* cleaner", "laundry", "paper plates", "napkins", "drano"
    ],
    exclude: []
  },
  "Baby Supplies": {
    match: [
      "diapers", "bibs", "wipes", "baby wipes", "baby *"
    ],
    exclude: []
  },
  "Personal Care": {
    match: [
      "toothpaste", "shaving cream", "shaving *", "razors", "shampoo", "conditioner", "soap", 
      "toothbrush", "tooth brush", "tooth brushes",
      "hair *", "* hair", "bath *", "* bath", "lotion", "facial wash"
    ],
    exclude: []
  },
  "Other": {
    match: [], 
    exclude: [] 
  }
}
