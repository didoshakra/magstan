//_document.js
import Document, { Head, Main, NextScript } from "next/document";

//Для створенння метатег всередині голови є компонент Head та спеціальний файл _document.js,
//в якому ми можемо налаштувати загальний html кожнлї сторінки(який надається один раз лише на стороні сервера).
//Ми змінимо його так, щоб він включав фавікон, оновив файл сторінки

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
