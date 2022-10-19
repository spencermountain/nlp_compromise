/* eslint-disable no-console, no-unused-vars */
import nlp from './src/three.js'
// import plg from './plugins/dates/src/plugin.js'
// nlp.plugin(plg)
nlp.verbose('tagger')
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
// nlp.parseMatch('{stroll}')
// doc.swap('stroll', 'walk')

// console.log(nlp.parseMatch('{kiss/verb}'))

// const doc = nlp("These are the old-fashioned dilemmas").debug()
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



  "UPDATE: /u/Averyhonestguy has raised a very sobering point",
  "Bike Share rolls out Pride themed bikes in New York",
  "Like I don't need nobody else",
  "C'mon, Luisa, you have a chance to be the bigger person here!",
  "Right after we broke up, my ex-girlfriend asked me how to change.",
  "Listen, calling people names says a lot more about you than it does about them, idiot.",
  "Hook, line, and sinker",
  "Brand new bags.",
  "Sweeten baked goods.",

  "Both sulfurization/desulfurization techniques and the use of removable thiol auxiliaries involve the installation of a synthetic thiol moiety to carry out the standard native chemical ligation chemistry, followed by removal of the auxiliary/thiol.",
  "After my first class on a Wednesday i knew id be sore and would need a day or two rest.",
  "Yes, my sultaness, my queen, I'll give you my heart without the least reserve.",
  "You have tears in your eyes.",
  "Boston through the eyes of Mayor John Tory",
  "Bismarck & Kissinger are among masters of this, politics based on pragmatic concerns",
  "What kind of key opens a banana?",
  "beating her--not hard, you know; just a smack or two, enough to set her",
  "If you turn me on to anything",
  "The Transaction is for hot rolled steel with a thickness of 1\" and a width of 72 inches.",
  "It has not worked out very well.",
  "Hey love.. sorry I crashed =(",
  "We’ve all paid the price for lenders who sold mortgages to people who couldn’t afford them, and buyers who knew they couldn’t afford them.",
  ",Consider the track record of the manufacturer and any previous experience with them or their consoles, also remember to consider reliability issues with either console",
  "The following lists do not include the lifeguard patrolled beaches which also have their own equipment including inflatable boats and jetskis.",
  "The shoes ran from new to sketchy, but mine were in the former category (and they said 'team cobra' on the side--awesome, whatever that means!).",
  "You have despised my counsel, and have gone your own evil way until you are only outwardly a man; really you are a monster -- the horror of everyone who knows you.",
  "Tell Monica I say goodbye.",
  "The Island airport tunnel nears completion",
  "Prime minister during the war, some later called him \"the minister who lost America\"",
  "She thought it was diet coke.",
  "merchants with whom Mr. Shuttleworthy dealt, I gave instructions to my",
  "But there you go again train travelin'",
  "Robert B Cass",
  "The nearest interstate is a 4 hour drive away.",
  "Reading ARP related article lor.",
  "We need to resolve the status of the illegal immigrants who are already in our country without animosity and without amnesty.",
  "Do a ground combo as soon as you block a clone’s attack.",
  "\"UAB SuperJazz, featuring Ellis Marsalis\" (2001)  (Co-produced by Ray Reach and Henry Panion), recorded at the Alys Stephens Center.",
  "I spoke with someone on the phone who heard a brief intro to my situation, put me on hold for about 5 minutes- came back and basically told me without even listening to the whole situation told me there was basically nothing they could she would talk to the attorney and call me.",
  "Charming replied that he was perfectly willing to go, and would set out the very next day.",
  "Ok, well, this was very special.",
  "The top 10 bars and pubs with cider on tap in Boston",
  "Adventurous 26th president, he was 1st to ride in an automobile & an airplane",
  "A girl just told me I've got a huge ego... I think she means cock.",
  "It frightened me like nothing else ever has.",
  "I couldn't hear a word, a word he said.",



]

// let doc = nlp("he said I am a boy, so far")
let i = 0
let txt = arr[i]
let doc = nlp(txt)
console.log(doc.text())
doc.clauses().debug()
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