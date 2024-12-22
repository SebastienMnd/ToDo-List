import "@/app/globals.css"

export const metadata = {
  title: 'ToDo List',
  description: 'ToDo List',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
