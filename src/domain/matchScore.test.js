import matchScore from './matchScore'

let tests = 
  [ { matcher: "cookie", candidate: "cookie", score: 1 }
  , { matcher: "cookie", candidate: "cookie crisp", score: 1 }
  , { matcher: "cookie", candidate: "banana", score: 0 }
  , { matcher: "cookie", candidate: "", score: 0 }
  , { matcher: "apple", candidate: "applesauce", score: 0 }
  , { matcher: "apple", candidate: null, score: 0 }

  , { matcher: "chocolate cookie", candidate: "chocolate cookie", score: 2 }
  , { matcher: "chocolate cookie", candidate: "chocolate cookie with sprinkles", score: 2 }
  , { matcher: "chocolate cookie", candidate: "big chocolate cookie", score: 2 }
  , { matcher: "chocolate cookie", candidate: "sugar cookie", score: 0 }
  , { matcher: "chocolate cookie", candidate: "cookie chocolate", score: 0 }

  , { matcher: "* cookie", candidate: "sugar cookie", score: 2 }
  , { matcher: "* cookie", candidate: "SUGar CooKie", score: 2 }
  , { matcher: "* cookie", candidate: "sugar cookie cereal", score: 2 }
  , { matcher: "* cookie", candidate: "chocolate chunk cookie", score: 2 }
  , { matcher: "* cookie", candidate: "cookie cereal", score: 0 }
  , { matcher: "* cookie", candidate: "supercookie", score: 0 }
  , { matcher: "* apple", candidate: "pineapple", score: 0 }

  , { matcher: "cookie *", candidate: "cookie crisp", score: 2 }
  , { matcher: "cookie *", candidate: "big cookie cereal", score: 2 }
  , { matcher: "cookie *", candidate: "big cookie", score: 0 }
  , { matcher: "cookie *", candidate: "crisp cookie", score: 0 }
  , { matcher: "apple *", candidate: "applesauce", score: 0 }

  , { matcher: "* * cookie", candidate: "chocolate chip cookie", score: 3 }
  , { matcher: "* * cookie", candidate: "chocolate chip cookie dough", score: 3 }
  , { matcher: "* * cookie", candidate: "chocolate cookie dough", score: 0 }
  , { matcher: "* * cookie", candidate: "cookie", score: 0 }

  , { matcher: "cookie * *", candidate: "cookie crisp cereal", score: 3 }
  , { matcher: "cookie * *", candidate: "cookie crisp cereal chunks", score: 3 }
  , { matcher: "cookie * *", candidate: "super cookie crisp cereal", score: 3 }
  , { matcher: "cookie * *", candidate: "super cookie crisp cereal chunks", score: 3 }
  , { matcher: "cookie * *", candidate: "cookie crisp", score: 0 }

  , { matcher: "chocolate * cookie", candidate: "chocolate chunk cookie", score: 3 }
  , { matcher: "chocolate * cookie", candidate: "chocolate chunk cookie dough", score: 3 }
  , { matcher: "chocolate * cookie", candidate: "big chocolate chunk cookie", score: 3 }
  , { matcher: "chocolate * cookie", candidate: "big chocolate chunk cookie dough", score: 3 }
  , { matcher: "chocolate * cookie", candidate: "chunk cookie", score: 0 }
  , { matcher: "chocolate * cookie", candidate: "chocolate cookie", score: 0 }
  , { matcher: "chocolate * cookie", candidate: "chocolate", score: 0 }

  , { matcher: "chocolate * * cookie", candidate: "chocolate chunk super cookie", score: 4 }
  , { matcher: "chocolate * * cookie", candidate: "chocolate super cookie", score: 0 }

  , { matcher: "* chocolate * cookie", candidate: "big chocolate chip cookie", score: 4 }
  , { matcher: "* chocolate * cookie", candidate: "big chocolate chip cookie dough", score: 4 }
  , { matcher: "* chocolate * cookie", candidate: "super big chocolate chip cookie dough", score: 4 }
  , { matcher: "* chocolate * cookie", candidate: "chocolate chip cookie", score: 0 }
  , { matcher: "* chocolate * cookie", candidate: "big chocolate cookie", score: 0 }
  ]

tests.forEach(test => {
  it('matcher: "' + test.matcher + '", candidate: "' + test.candidate + '", expected score: ' + test.score, () => {
    expect(matchScore(test.matcher, test.candidate)).toEqual(test.score);
  });
})
