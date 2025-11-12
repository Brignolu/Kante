import './globals.css'
import Menu from './Menu'
import Image from 'next/image'

export const metadata = {
  title: 'Kanté Construction - Votre partenaire de confiance',
  description: 'Construction, rénovation et maçonnerie de qualité à Reignier-Esery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
    <body className="font-sans antialiased">
    <header className="App-header">
    <Image width={300} height={300} alt='Kanté construction Logo' src="/KanteConstructionLogo.png"/>
    <Menu/>
    </header>
    {children}
    <footer>
    
    </footer>
    </body>
    </html>
    )
  }
