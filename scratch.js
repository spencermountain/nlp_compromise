/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import nlp from './builds/compromise.cjs'

nlp.verbose('tagger')

// bug!
// let doc = nlp(`extra. one two.`)
// doc.remove('extra')
// console.log(doc.text())

// Purchase of power from IPPs will ruin GEB
// States that make basic private health insurance [should receive] federal funds
let doc = nlp(`the eyes closed`).debug()
// doc.verbs().debug().toInfinitive()
// doc.debug()
//
/*












*/
