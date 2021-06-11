import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'
import FavIcon from "../assets/favicon.png";

class MyDocument extends Document {
  static async getInitialProps (ctx:any) {
    const styledComponentsSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: (App:any) => (props:any) => <App {...props} />
          })
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )
        }
      } finally {
        styledComponentsSheet.seal()
      }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* PWA primary color */}
          <meta
            name="theme-color"
            content="#0d386c"
          />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          {/*  Global site tag (gtag.js) - Google Analytics */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;