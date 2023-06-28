'use client'
import { busca, buscaLista } from "../model/produtos"
import { useEffect, useState } from "react"

export default function carrinho(){

    const [ produto, alteraproduto ] = useState( [] );

    useEffect(()=> {

        let objeto = localStorage.getItem("carrinho")
        objeto = JSON.parse( objeto );

        async function dados(){
        const lista = objeto.map( o => o.id );
        const resposta = await buscaLista ( lista );
        alteraproduto( resposta.data);
        }
        dados();
        
    }, [])

    return(
        <div> 
            <h1> Carrinho</h1>
            <p> Quantidade de produtos: <strong> 0 </strong>  </p>
            <p> Total do carrinho: R$ <strong> 0 </strong></p>
            <hr/>

                {
                    produto == 0 ?  <p> Seu carrinho ainda está vazio... </p> :
                    produto.map( objeto => { 
                       return <div> 
                            <p> { objeto.nome } </p>
                            <p> { objeto.preco } </p>
                            <img src={ objeto.imagem }height={300}/>
                        </div>   
                   } )
                   
                }
          
        </div>
    )

}
