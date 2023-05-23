import './globals.css'

export const metadata = {
  title: 'IC Manage Coding Exercise',
  description: 'Exercise to integrate ReScript into NextJs 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  )
}
