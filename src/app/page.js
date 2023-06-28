'use client'
import { useState, useEffect } from "react"
import { buscaTodos } from "./model/produtos"
import Link from "next/link"


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
    <div>
        <h1> Grazielly Store </h1>
        <p> Confira nossos produtos: </p>

        {
           produtos == 0 ? <p> Carregando... </p> :
           produtos.map( produto =>
            
            <Link href={"/produto/"+ produto.id } > 
              <div key={ produto.id }> 
                  <p> { produto.nome } </p> 
                  <p> { produto.preco } </p> 
                  <img src={ produto.imagem } height={300} />
                  <hr/> 
             </div>
            </Link>
          )
            
        }


    </div>
  )
}
