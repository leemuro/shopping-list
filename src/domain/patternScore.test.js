import patternScore from './patternScore'

let tests = 
  [ { pattern: "cookie", candidate: "cookie", score: 1 }
  , { pattern: "cookie", candidate: "cookie crisp", score: 1 }
  , { pattern: "cookie", candidate: "banana", score: 0 }
  , { pattern: "cookie", candidate: "", score: 0 }
  , { pattern: "apple", candidate: "applesauce", score: 0 }
  , { pattern: "apple", candidate: null, score: 0 }

  , { pattern: "chocolate cookie", candidate: "chocolate cookie", score: 2 }
  , { pattern: "chocolate cookie", candidate: "chocolate cookie with sprinkles", score: 2 }
  , { pattern: "chocolate cookie", candidate: "big chocolate cookie", score: 2 }
  , { pattern: "chocolate cookie", candidate: "sugar cookie", score: 0 }
  , { pattern: "chocolate cookie", candidate: "cookie chocolate", score: 0 }

  , { pattern: "* cookie", candidate: "sugar cookie", score: 2 }
  , { pattern: "* cookie", candidate: "SUGar CooKie", score: 2 }
  , { pattern: "* cookie", candidate: "sugar cookie cereal", score: 2 }
  , { pattern: "* cookie", candidate: "chocolate chunk cookie", score: 2 }
  , { pattern: "* cookie", candidate: "cookie cereal", score: 0 }
  , { pattern: "* cookie", candidate: "supercookie", score: 0 }
  , { pattern: "* apple", candidate: "pineapple", score: 0 }

  , { pattern: "cookie *", candidate: "cookie crisp", score: 2 }
  , { pattern: "cookie *", candidate: "big cookie cereal", score: 2 }
  , { pattern: "cookie *", candidate: "big cookie", score: 0 }
  , { pattern: "cookie *", candidate: "crisp cookie", score: 0 }
  , { pattern: "apple *", candidate: "applesauce", score: 0 }

  , { pattern: "* * cookie", candidate: "chocolate chip cookie", score: 3 }
  , { pattern: "* * cookie", candidate: "chocolate chip cookie dough", score: 3 }
  , { pattern: "* * cookie", candidate: "chocolate cookie dough", score: 0 }
  , { pattern: "* * cookie", candidate: "cookie", score: 0 }

  , { pattern: "cookie * *", candidate: "cookie crisp cereal", score: 3 }
  , { pattern: "cookie * *", candidate: "cookie crisp cereal chunks", score: 3 }
  , { pattern: "cookie * *", candidate: "super cookie crisp cereal", score: 3 }
  , { pattern: "cookie * *", candidate: "super cookie crisp cereal chunks", score: 3 }
  , { pattern: "cookie * *", candidate: "cookie crisp", score: 0 }

  , { pattern: "chocolate * cookie", candidate: "chocolate chunk cookie", score: 3 }
  , { pattern: "chocolate * cookie", candidate: "chocolate chunk cookie dough", score: 3 }
  , { pattern: "chocolate * cookie", candidate: "big chocolate chunk cookie", score: 3 }
  , { pattern: "chocolate * cookie", candidate: "big chocolate chunk cookie dough", score: 3 }
  , { pattern: "chocolate * cookie", candidate: "chunk cookie", score: 0 }
  , { pattern: "chocolate * cookie", candidate: "chocolate cookie", score: 0 }
  , { pattern: "chocolate * cookie", candidate: "chocolate", score: 0 }

  , { pattern: "chocolate * * cookie", candidate: "chocolate chunk super cookie", score: 4 }
  , { pattern: "chocolate * * cookie", candidate: "chocolate super cookie", score: 0 }

  , { pattern: "* chocolate * cookie", candidate: "big chocolate chip cookie", score: 4 }
  , { pattern: "* chocolate * cookie", candidate: "big chocolate chip cookie dough", score: 4 }
  , { pattern: "* chocolate * cookie", candidate: "super big chocolate chip cookie dough", score: 4 }
  , { pattern: "* chocolate * cookie", candidate: "chocolate chip cookie", score: 0 }
  , { pattern: "* chocolate * cookie", candidate: "big chocolate cookie", score: 0 }
  ]

tests.forEach(test => {
  it('pattern: "' + test.pattern + '", candidate: "' + test.candidate + '", expected score: ' + test.score, () => {
    expect(patternScore(test.pattern, test.candidate)).toEqual(test.score);
  });
})
