/* eslint-disable no-console, no-unused-vars */
import nlp from './src/two.js'
// console.log(nlp.world().methods.two.transform)
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)
// nlp.verbose('tagger')
// let txt = ''
// let doc
// let m

// bug 1
// doc = nlp('we swim')
// console.log(doc.verbs().conjugate())

// bug 2
// doc = nlp('blew').debug()
// console.log(doc.verbs().conjugate())

// bug 3
// doc = nlp(' 18e').debug()



// const text = `Remove me 1:
// - A some text
// - B some text
// - C some text`

// const doc = nlp(text)
// doc.match('Remove me #NumericValue').forEach((m) => doc.remove(m))
// doc.match('* some text$').forEach((m) => m.prepend('prefix'))
// console.log(doc.out())

// const txt = `before Remove 500mg of paracetamol`
// const doc = nlp(txt)
// doc.remove('Remove')
// console.log(doc.text())

// let doc = nlp('i strolled downtown')
// doc.match('{stroll}')
nlp.parseMatch('{stroll}')
// doc.swap('stroll', 'walk')

// console.log(nlp.parseMatch('{kiss/verb}'))

// const doc = nlp("These are the old-fashioned dilemmas").debug()
// const doc = nlp("foobar. he was demanding his rights after. walking his plank after")
// let net = nlp.buildNet([{ match: 'his .', ifNo: ['demanding', 'rights'] }])
// doc.match(net).debug()

// let doc = nlp("he said I am a boy")
// console.log(doc.sentences().json())

// [ { form: 'simple-present', tense: 'PresentTense', copula: true } ]

// let doc = nlp(`Remove me 1. A some text. B some text. C some text`)
// console.log(doc)
// doc.match('Remove me 1').forEach((m) => doc.remove(m))
// console.log(doc)
// // let res = doc.match('* some text$').prepend('prefix')
// doc.match('* some text$').forEach(m => m.prepend('prefix'))
// doc.all()
// console.log(doc)
// console.log(doc.text())//`Prefix A some text. Prefix B some text. Prefix C some text`
// console.log(doc.text() === `Prefix A some text. Prefix B some text. Prefix C some text`)

// console.log(doc.verbs().conjugate())
// console.log(doc.verbs().toGerund().text())


// date issues:
// 'the month before christmas' vs 'a month before christmas'
// middle september
// end of september
// first half of march
// week of june 3rd
// fridays in june
// every saturday
// now
// until christmas