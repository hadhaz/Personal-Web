import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id='modal-overlay'></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
