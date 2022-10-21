/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)
nlp.verbose('tagger')
let txt = ''
let doc
// let m

// bug 1
// doc = nlp('we swim')
// console.log(doc.verbs().conjugate())

// bug 2
// doc = nlp("when the rain pours, come have a drink").debug()
// console.log(doc.verbs().conjugate())

// bug 3
// let doc = nlp("Dr. John Smith-McDonald...")
// let opts = {
//   keepPunct: false,
//   abbreviations: false,
//   case: false,
// }
// console.log(doc.text(opts))


// let doc = nlp(`zero foo. one match foo. two foo.`)
// doc.remove('match') // first removal
// console.log(doc)
// doc.eq(0).remove() //second removal
// console.log(doc)
// doc.debug()

// const doc = nlp("foobar. he was demanding his rights after. walking his plank after")
// let net = nlp.buildNet([{ match: 'his .', ifNo: ['demanding', 'rights'] }])
// doc.match(net).debug()




let arr = [
  // "Stances include regular, goofy foot & this one ",
  // "He got in touch with me last night and wants me to meet him today at 2 pm",
  // "Life's a schoolyard, I ain't gettin' picked last",
  // "I've tried the flautas, enchiladas, and juevos rancheros and while none of them were the absolute best mexican dishes I've ever had, I was not disappointed at all.",
  // "St. Nicholas shall leave the helm and that the only cargo shall be black cats.",
  // "we need the fastest, most reliable ways .",
  // "A moment later, he dropped the phone, walked to the other room, and started crying so hard.",
  // "Why are there people that doubleclick?",
  // "Anyway we r movin off now only lor.",


  // "The money generated by the industry kept the city insulated from much of the economic loss suffered by the rest of the country during the Great Depression.",
  // "a run of the mill food court",
  // "a disappointment which I could not have foreseen.",
  // "feeling a dim sort of sweat rising up inside his clothes.",
  // "If we can selflessly confront evil for the sake of good in a land so far away, then surely we can make this land all it should be.",



  // "UPDATE: /u/Averyhonestguy has raised a very sobering point",
  // "Bike Share rolls out Pride themed bikes in New York",
  // "C'mon, Luisa, you have a chance to be the bigger person here!",
  // "Do quick and easy exercises at home.",
  // "Determine whether you have the necessary qualities for the profession.",
  // "Be sure to say goodbye to the interviewers before you leave.",
  // "Make room for flexibility in your schedule.",
  // "Reduce medications during less stressful periods.",
  // "Focus on her qualities and accomplishments",
  // "Sweeten baked goods.",

  // "After my first class on a Wednesday i knew id be sore.",
  // "without the least reserve.",
  // "If you turn me on to anything",
  // "Consider the track record of the manufacturer and any previous experience with them or their consoles, also remember to consider reliability issues with either console",
  // "government-funded research",
  // "lifeguard patrolled beaches",
  // "Pride themed bikes",
  // "Tell Monica I say goodbye.",
  // "Reading ARP related article lor.",

  // `want to see`,
  // `Try to see`,
  // `lift & extend`,
  // `by crossing`,
  // `Avoid cuddling`,
  // `start exercising`,
  // `Be more`,
  // `don't become discouraged`,
  // `such as teaching`,
  // `held annually is called`,
  `Avoid sending romantic messages`,
  `subsequently remained`,
  `said jocularly`,
  `fails so miserably`,
  // "they might have been spared",
  // "the King's courage was unshaken",
  // "there it is",
  // "auction games are brought up",
  // "a plate had been broken",
  // " the economic loss suffered by the country",
  // "i've been knocked down",
  // "At this point we're frustrated but the hotel"

]


txt = arr[0]
// txt = "when the rain pours, come and have a drink"
doc = nlp(txt)
doc.verbs().debug()
// console.log(doc.sentences().json()[0].sentence)

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