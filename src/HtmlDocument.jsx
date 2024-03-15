import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export const HtmlDocument = () => (
  <Html>
    <Head />
    <body style={{ margin: 0 }}>
      <Main />
      <NextScript />
    </body>
  </Html>
)

HtmlDocument.getInitialProps = async (ctx) => {
  const cache = createCache()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    })

  const initialProps = await Document.getInitialProps(ctx)
  const style = extractStyle(cache, true)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  }
}
