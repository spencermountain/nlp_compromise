import adj from './_adj.js'

// the boiled egg
// boiled the water

const past = {
  beforeTags: {
    Adverb: 'PastTense', //quickly detailed
    Pronoun: 'PastTense', //he detailed
    // Noun:'PastTense', //eye closed
    Auxiliary: 'PastTense',
  },
  afterTags: {
    Possessive: 'PastTense', //hooked him
    Pronoun: 'PastTense', //hooked me
    Determiner: 'PastTense', //hooked the
    Adverb: 'PastTense', //cooked perfectly
    Comparative: 'PastTense',//closed higher
  },
  beforeWords: {
    be: 'PastTense',//be hooked
    get: 'PastTense',//get charged
    had: 'PastTense',
    has: 'PastTense',
    have: 'PastTense',
    been: 'PastTense',
  },
  afterWords: {
    by: 'PastTense', //damaged by
    back: 'PastTense', //charged back
    out: 'PastTense', //charged out
    in: 'PastTense', //crowded in
    up: 'PastTense', //heated up
    down: 'PastTense', //hammered down
    for: 'PastTense', //settled for
    the: 'PastTense', //settled the
    with: 'PastTense', //obsessed with
    as: 'PastTense', //known as
    on: 'PastTense', //focused on
  },
}

export default {
  beforeTags: Object.assign({}, adj.beforeTags, past.beforeTags),
  afterTags: Object.assign({}, adj.afterTags, past.afterTags),
  beforeWords: Object.assign({}, adj.beforeWords, past.beforeWords),
  afterWords: Object.assign({}, adj.afterWords, past.afterWords),
}