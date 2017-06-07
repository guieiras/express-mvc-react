import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
const ejs = require('ejs')

export function Render(view, vars) {
  let View = require(`./${view}`)
  let content = ReactDOMServer.renderToStaticMarkup(<View data={vars}/>)

  return ejs.render(fs.readFileSync('./src/views/index.ejs').toString(), Object.assign(vars, {content}))
}
