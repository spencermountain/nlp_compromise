import nlp from '../../../src/three.js'
import plugin from './src/plugin.js'
nlp.extend(plugin)

let doc = nlp('i saw John Lennon, and tom cruise.')

doc.people().forEach(m => {
  if (m.has('john lennon')) {
    m.addPayload({ height: `5'11` })
  }
  if (m.has('tom cruise')) {
    m.addPayload({ height: `5'8` })
  }
})
// console.log(doc.getPayloads())
doc.debug('payload')
// let m = doc.match('and tom .').debug('payload')
// console.log(m.getPayloads())
