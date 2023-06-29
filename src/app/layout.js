import "@/app/globals.css"

import Menu from "@/componentes/Menu"
import Rodape from "@/componentes/Rodape"

export const metadata = {
  title: 'Grazielly Store',
  description: 'Compre tudo que você precisa de A à Z',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
        <body>
            <Menu />
            {children}
            <Rodape /> 
        </body> 
    </html>
  )
}
