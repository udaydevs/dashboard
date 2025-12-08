import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@600;900&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className="">
        <main className="">
          {children}
        </main>

      </body>
    </html>
  );
}
