/* eslint-disable no-console */
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const reset = '\x1b[0m'

function isClientSide() {
  return typeof window !== 'undefined' && window.document
}

// some nice colors for client-side debug
const css = {
  green: '#7f9c6c',
  red: '#914045',
  blue: '#6699cc',
  magenta: '#6D5685',
  cyan: '#2D85A8',
  yellow: '#e6d7b3',
  black: '#303b50',
}
const logClientSide = function (view) {
  let tagset = view.world.tags
  view.forEach(terms => {
    // console.log('\n%c"' + p.text() + '"', 'color: #e6d7b3;')
    // let terms = p.terms()
    terms.forEach(t => {
      let tags = t.tags
      let text = t.text || '-'
      if (t.implicit) {
        text = '[' + t.implicit + ']'
      }
      let word = "'" + text + "'"
      word = word.padEnd(8)
      let found = tags.find(tag => tagset[tag] && tagset[tag].color)
      let color = 'steelblue'
      if (tagset[found]) {
        color = tagset[found].color
        color = css[color]
      }
      console.log(`   ${word}  -  %c${tags.join(', ')}`, `color: ${color || 'steelblue'};`)
    })
  })
}
//cheaper than requiring chalk
const cli = {
  green: function (str) {
    return '\x1b[32m' + str + reset
  },
  red: function (str) {
    return '\x1b[31m' + str + reset
  },
  blue: function (str) {
    return '\x1b[34m' + str + reset
  },
  magenta: function (str) {
    return '\x1b[35m' + str + reset
  },
  cyan: function (str) {
    return '\x1b[36m' + str + reset
  },
  yellow: function (str) {
    return '\x1b[33m' + str + reset
  },
  black: function (str) {
    return '\x1b[30m' + str + reset
  },
}
const tagString = function (tags, model) {
  if (model.two.tags) {
    tags = tags.map(tag => {
      if (!model.two.tags.hasOwnProperty(tag)) {
        return tag
      }
      const c = model.two.tags[tag].color || 'blue'
      return cli[c](tag)
    })
  }
  return tags.join(', ')
}

const showChunks = function (view) {
  let { docs } = view
  docs.forEach(terms => {
    let out = []
    terms.forEach(term => {
      if (term.chunk === 'Noun') {
        out.push(cli.blue(term.implicit || term.normal))
      } else if (term.chunk === 'Verb') {
        out.push(cli.green(term.implicit || term.normal))
      } else if (term.chunk === 'Adjective') {
        out.push(cli.yellow(term.implicit || term.normal))
      } else if (term.chunk === 'Conjunction') {
        out.push(cli.red(term.implicit || term.normal))
      } else {
        out.push(term.implicit || term.normal)
      }
    })
    console.log(out.join(' '), '\n')
  })
}

//output some helpful stuff to the console
const debug = function (opts = {}) {
  let view = this
  let { docs, model } = view
  if (isClientSide()) {
    logClientSide(view)
    return view
  }
  if (opts.tags !== false) {
    console.log(cli.blue('====='))
    docs.forEach(terms => {
      console.log(cli.blue('  -----'))
      terms.forEach(t => {
        let tags = [...(t.tags || [])]
        let text = t.text || '-'
        if (t.implicit) {
          text = '[' + t.implicit + ']'
        }
        if (typeof module !== undefined) {
          text = cli.yellow(text)
        }
        let word = "'" + text + "'"
        word = word.padEnd(18)
        let str = cli.blue('  ｜ ') + word + '  - ' + tagString(tags, model)
        console.log(str)
      })
    })
    console.log('\n')
  }
  // output chunk-view, too
  if (opts.chunks !== false) {
    showChunks(view)
  }
  return view
}
export default debug
