const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const serverBundle = require(path.resolve('../../dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve('../../dist/vue-ssr-client-manifest.json'))

const ssrHTML = `<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ title }}</title>
    <meta name="generator" content="VuePress {{ version }}">
  </head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>
`

async function main () {
  // create server renderer using built manifests
  const renderer = createBundleRenderer(serverBundle, {
    clientManifest,
    runInNewContext: false,
    inject: false,
    shouldPrefetch: () => true,
    template: ssrHTML
  })

  const context = {
    title: 'VuePress',
    lang: 'en',
    version: '1.0'
  }

  let html = await renderer.renderToString(context)
  fs.writeFile('../../dist/index.html', html, () => { console.log('finish') })
}

main()