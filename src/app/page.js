'use client'
import { useState, useEffect } from "react"
import { buscaTodos } from "./model/produtos"
import Link from "next/link"
import Produto from "@/componentes/Produto"


export default function Home() {

  const[ produtos, alteraprodutos ] = useState( [] )

  console.log ( process.env.NEXT_PUBLIC_API_URL )

  useEffect(  ()=>{
    async function dados(){
      const resposta = await buscaTodos();
      alteraprodutos( resposta.data )
    }
    dados();
  }, [] )

  return (
    <div className="grid grid-cols-2 place-items-center">

        {
           produtos == 0 ? <p> Carregando... </p> :
           produtos.map( produto =>
            
            <Link href={"/produto/"+ produto.id } > 
              <Produto produto={produto} largura={250} />
            </Link>
          )
            
        }


    </div>
  )
}
